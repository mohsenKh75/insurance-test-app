import React, { useEffect, useRef, useState } from 'react';
import { Input } from '..';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import ArrowDown from '~/main/arrowDown.svg';

interface Props {
  placeholder?: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  options: Array<{ [key: string]: string }>;
  selectOptionHandler: (option: string) => void;
  optionIdProp: string;
  optionTitleProp: string;
}

export function Dropdown({
  options,
  register,
  placeholder,
  id,
  optionIdProp,
  optionTitleProp,
  selectOptionHandler
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Input
        leftIcon={ArrowDown}
        id={id}
        register={register(id)}
        type='text'
        onClick={toggleDropdown}
        placeholder={placeholder}
        inputProps={{ readOnly: true }}
      />
      {isOpen && (
        <ul className='border-slate-600 outline-slate-200 outline w-full rounded-sm bg-white'>
          {options?.map((option) => (
            <li
              className='px-2'
              key={option[optionIdProp]}
              onClick={() => {
                selectOptionHandler(option[optionTitleProp]);
                setIsOpen(false);
              }}
            >
              {option[optionTitleProp]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
