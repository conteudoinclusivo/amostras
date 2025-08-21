// ATENÇÃO: Cole aqui a URL da sua API do Google Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbx2WRiZAgdHRw5cs68iWQIigqDpacRFsmib02WqlhnZ_gHz4pCeZqcRugtpwXT1Sluy/exec';

// Elementos da DOM
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('nav button');
const loader = document.getElementById('loader');

// Modais e Formulários
const modalBackdrop = document.getElementById('modal-backdrop');
const receberModal = document.getElementById('receber-modal');
const entregarModal = document.getElementById('entregar-modal');
const btnShowReceber = document.getElementById('btn-show-receber');
const btnShowEntregar = document.getElementById('btn-show-entregar');
const formReceber = document.getElementById('form-receber');
const formEntregar = document.getElementById('form-entregar');
const checkLembrete = document.getElementById('check-lembrete');
const lembreteFields = document.getElementById('lembrete-fields');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const viewId = button.getAttribute('data-view') + '-view';
            switchView(viewId);
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Abrir modais
    btnShowReceber.addEventListener('click', () => showModal(receberModal));
    btnShowEntregar.addEventListener('click', () => showModal(entregarModal));
    
    // Fechar modais
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop || e.target.classList.contains('btn-cancel')) {
            hideModal();
        }
    });

    // Lógica do formulário de lembrete
    checkLembrete.addEventListener('change', () => {
        lembreteFields.classList.toggle('hidden', !checkLembrete.checked);
    });
    
    // Submissão dos formulários
    formReceber.addEventListener('submit', handleReceberSubmit);
    formEntregar.addEventListener('submit', handleEntregarSubmit);
    
    // Carregar dados iniciais
    loadDashboardData();
    loadInventoryData();
    loadAutocompleteData();
});

// Funções de Controle de UI
function switchView(viewId) {
    views.forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function showModal(modal) {
    modalBackdrop.classList.remove('hidden');
    modal.classList.remove('hidden');
}

function hideModal() {
    modalBackdrop.classList.add('hidden');
    receberModal.classList.add('hidden');
    entregarModal.classList.add('hidden');
    formReceber.reset();
    formEntregar.reset();
    lembreteFields.classList.add('hidden');
}

function showLoader() { loader.classList.remove('hidden'); }
function hideLoader() { loader.classList.add('hidden'); }

// Funções de API
async function fetchData(action) {
    showLoader();
    try {
        const response = await fetch(`${API_URL}?action=${action}`);
        if (!response.ok) throw new Error('Erro na rede');
        return await response.json();
    } catch (error) {
        console.error(`Erro ao buscar dados (${action}):`, error);
        alert('Falha ao carregar dados. Verifique o console para mais detalhes.');
    } finally {
        hideLoader();
    }
}

async function postData(action, data) {
    showLoader();
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors', // Importante para o Google Apps Script
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, data })
        });
        // Como o modo é no-cors, não podemos ler a resposta, mas assumimos sucesso se não houver erro de rede.
        // A lógica de atualização dos dados na tela será chamada após o envio.
        return { status: 'success' };
    } catch (error) {
        console.error(`Erro ao enviar dados (${action}):`, error);
        alert('Falha ao enviar dados. Verifique o console para mais detalhes.');
        return { status: 'error' };
    } finally {
        hideLoader();
    }
}

// Funções de Carregamento de Dados
async function loadDashboardData() {
    const data = await fetchData('getDashboardData');
    if (!data) return;

    const vencimentosList = document.getElementById('vencimentos-list');
    const lembretesList = document.getElementById('lembretes-list');
    
    vencimentosList.innerHTML = '';
    lembretesList.innerHTML = '';

    // Renderiza Vencimentos
    if (data.vencimentos.length === 0) {
        vencimentosList.innerHTML = '<p>Nenhum vencimento próximo.</p>';
    } else {
        data.vencimentos.forEach(item => {
            const dias = item.diasParaVencer;
            const tagClass = dias <= 7 ? 'danger' : 'warning';
            vencimentosList.innerHTML += `
                <div class="list-item">
                    <div class="info">
                        <strong>${item.NomeRemedio}</strong>
                        <span>Val: ${new Date(item.DataValidade).toLocaleDateString()}</span>
                    </div>
                    <span class="tag ${tagClass}">${dias} dias</span>
                </div>
            `;
        });
    }

    // Renderiza Lembretes
    if (data.lembretes.length === 0) {
        lembretesList.innerHTML = '<p>Nenhum lembrete agendado.</p>';
    } else {
        data.lembretes.forEach(lembrete => {
            lembretesList.innerHTML += `
                <div class="list-item">
                    <div class="info">
                        <strong>${lembrete.Titulo}</strong>
                        <span>${new Date(lembrete.DataHora).toLocaleString()}</span>
                    </div>
                    <span class="tag info">Pendente</span>
                </div>
            `;
        });
    }
}

async function loadInventoryData() {
    const inventory = await fetchData('getInventory');
    if (!inventory) return;

    const tableBody = document.getElementById('inventory-table-body');
    const estoqueDatalist = document.getElementById('estoque-datalist');
    
    tableBody.innerHTML = '';
    estoqueDatalist.innerHTML = '';

    inventory.forEach(item => {
        if (item.Quantidade > 0) {
            tableBody.innerHTML += `
                <tr>
                    <td>${item.NomeRemedio}</td>
                    <td>${item.Quantidade}</td>
                    <td>${new Date(item.DataValidade).toLocaleDateString()}</td>
                </tr>
            `;
            // Popula datalist para entrega
            estoqueDatalist.innerHTML += `<option value="${item.NomeRemedio}">`;
        }
    });
}

async function loadAutocompleteData() {
    const data = await fetchData('getAutocompleteData');
    if (!data) return;
    
    populateDatalist('remedio-datalist', data.medicamentos, 'NomeRemedio');
    populateDatalist('substancia-datalist', data.medicamentos, 'Substancia');
    populateDatalist('categoria-datalist', data.medicamentos, 'Categoria');
    populateDatalist('laboratorio-datalist', data.medicamentos, 'Laboratorio');
    populateDatalist('representante-datalist', data.medicamentos, 'Representante');
    populateDatalist('paciente-datalist', data.pacientes, 'NomePaciente');
}

function populateDatalist(datalistId, data, field) {
    const datalist = document.getElementById(datalistId);
    const uniqueValues = [...new Set(data.map(item => item[field]).filter(Boolean))];
    datalist.innerHTML = uniqueValues.map(value => `<option value="${value}"></option>`).join('');
}

// Manipuladores de Eventos (Submissão de Formulários)
async function handleReceberSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formReceber);
    const data = Object.fromEntries(formData.entries());
    data.Quantidade = parseInt(data.Quantidade, 10);
    // Converte o valor do switch button
    data.Tipo = data.Tipo ? 'Original' : 'Amostra';

    const result = await postData('receberAmostra', data);
    
    hideModal();
    // Aguarda um pouco para a planilha atualizar antes de recarregar os dados
    setTimeout(() => {
        loadDashboardData();
        loadInventoryData();
        loadAutocompleteData();
        alert('Amostra recebida com sucesso!');
    }, 2000);
}

async function handleEntregarSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formEntregar);
    const data = Object.fromEntries(formData.entries());
    data.Quantidade = parseInt(data.Quantidade, 10);
    data.AgendarLembrete = !!data.AgendarLembrete;

    // Lógica de validação simples no front-end (a validação principal está no back-end)
    if (data.Quantidade <= 0) {
        alert('A quantidade deve ser maior que zero.');
        return;
    }
    
    const result = await postData('entregarAmostra', data);

    hideModal();
    setTimeout(() => {
        loadDashboardData();
        loadInventoryData();
        loadAutocompleteData();
        alert('Amostra entregue com sucesso!');
    }, 2000);
}
