import React, { FC } from 'react';

interface props {
  text: string;
}

const ClipboardIco: FC<props> = ({ text }) => {
  return (
    <>
      <label defaultValue={text} >
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' id={text}>
          <path
            d='M4.8125 4.375V3.563C4.8125 2.90092 5.30542 2.33917 5.96517 2.28433C6.18275 2.26683 6.4015 2.25108 6.62025 2.23767M9.1875 10.5H10.5C10.8481 10.5 11.1819 10.3617 11.4281 10.1156C11.6742 9.86944 11.8125 9.5356 11.8125 9.1875V3.563C11.8125 2.90092 11.3196 2.33917 10.6598 2.28433C10.4417 2.26624 10.2233 2.25068 10.0047 2.23767M10.0047 2.23767C9.9219 1.96974 9.75486 1.73538 9.52918 1.5689C9.3035 1.40242 9.03044 1.31257 8.75 1.3125H7.875C7.59456 1.31257 7.3215 1.40242 7.09582 1.5689C6.87014 1.73538 6.70368 1.96974 6.62083 2.23767C6.58292 2.36017 6.5625 2.49025 6.5625 2.625V3.0625H10.0625V2.625C10.0625 2.49025 10.0427 2.36017 10.0047 2.23767ZM9.1875 10.9375V9.84375C9.1875 9.3216 8.98008 8.82085 8.61087 8.45163C8.24165 8.08242 7.74089 7.875 7.21875 7.875H6.34375C6.1697 7.875 6.00278 7.80586 5.87971 7.68279C5.75664 7.55972 5.6875 7.3928 5.6875 7.21875V6.34375C5.6875 5.8216 5.48008 5.32085 5.11087 4.95163C4.74165 4.58242 4.24089 4.375 3.71875 4.375H3.0625M3.9375 4.375H2.84375C2.4815 4.375 2.1875 4.669 2.1875 5.03125V12.0312C2.1875 12.3935 2.4815 12.6875 2.84375 12.6875H8.53125C8.8935 12.6875 9.1875 12.3935 9.1875 12.0312V9.625C9.1875 8.23261 8.63438 6.89726 7.64981 5.91269C6.66524 4.92812 5.32989 4.375 3.9375 4.375Z'
            stroke='#64748B' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </label>
    </>
  );
};

export default ClipboardIco;