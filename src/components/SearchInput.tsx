import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  onAddNew?: (value: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
  suggestions,
  onAddNew,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestions);
    }
  }, [value, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setIsOpen(false);
  };

  const handleAddNew = () => {
    if (value && onAddNew && !suggestions.includes(value)) {
      onAddNew(value);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value && onAddNew && !suggestions.includes(value)) {
      e.preventDefault();
      handleAddNew();
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full h-14 px-4 py-4 bg-white border border-[#e5dbd1] rounded-lg text-[#1c140d] placeholder-[#94734f] focus:outline-none focus:ring-2 focus:ring-[#784512] ${className}`}
      />
      
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-[#e5dbd1] rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-3 cursor-pointer hover:bg-[#f2ede8] text-[#1c140d] border-b border-[#f2ede8] last:border-b-0"
              >
                {suggestion}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-[#94734f]">
              Nenhum resultado encontrado
            </div>
          )}
          
          {value && onAddNew && !suggestions.includes(value) && (
            <div
              onClick={handleAddNew}
              className="px-4 py-3 cursor-pointer hover:bg-[#f2ede8] text-[#784512] font-medium border-t border-[#e5dbd1]"
            >
              + Adicionar "{value}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};