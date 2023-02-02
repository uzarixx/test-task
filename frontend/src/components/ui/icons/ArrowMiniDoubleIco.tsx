import React, { FC } from 'react';

interface props {
  onClick?: () => void;
  active: boolean;
}

const ArrowMiniDoubleIco: FC<props> = ({ onClick, active }) => {
  return (
    <svg onClick={onClick} width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd'
            d='M10.4802 19.1313C9.85539 18.5064 9.85539 17.4934 10.4802 16.8685L17.3489 9.9999L10.4802 3.13127C9.85539 2.50644 9.85539 1.49337 10.4802 0.868532C11.1051 0.243692 12.1181 0.243692 12.743 0.868532L20.743 8.86853C21.3678 9.49337 21.3678 10.5064 20.743 11.1313L12.743 19.1313C12.1181 19.7561 11.1051 19.7561 10.4802 19.1313Z'
            fill={active ? '#94A3B8' : '#64748B'} />
      <path fillRule='evenodd' clipRule='evenodd'
            d='M0.880228 19.1313C0.255389 18.5064 0.255389 17.4934 0.880228 16.8685L7.74886 9.9999L0.880227 3.13127C0.255389 2.50644 0.255388 1.49337 0.880227 0.868532C1.50507 0.243692 2.51813 0.243692 3.14297 0.868532L11.143 8.86853C11.7678 9.49337 11.7678 10.5064 11.143 11.1313L3.14297 19.1313C2.51813 19.7561 1.50507 19.7561 0.880228 19.1313Z'
            fill={active ? '#94A3B8' : '#64748B'} />
    </svg>
  );
};

export default ArrowMiniDoubleIco;