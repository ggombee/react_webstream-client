import { css } from '@emotion/react'
import React, { SetStateAction } from 'react'

export interface PopupItem extends React.HTMLAttributes<HTMLButtonElement> {
  key: number | string;
  label: number | string;
}

interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  items: PopupItem[];
}

const SelectPopup = ({ show, setShow, items, ...props }: PopupProps): React.ReactElement | null => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<EventTarget[]>([]);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      console.log(selectRef.current)
      if (e.target === null) {
        return;
      }
      if (![...selectRef.current, containerRef.current].includes(e.target)) {
        setShow(false);
        selectRef.current = []
      }
    }
    if (show) {
      document.addEventListener('click', handler);
    }
    return () => document.removeEventListener('click', handler);
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div ref={containerRef} css={container} {...props}>
      {items.map(({ key, label, ...v }) => {
        return <button key={key} ref={ref => {
          if (ref === null) {
            return;
          }
          selectRef.current.push(ref)
        }} css={button} {...v}>{label}</button>
      })}
    </div>
  )
}

const container = css`
  background: #1B1B1B;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: inline-block;
  padding: 15px;
`;

const button = css`
  display: block;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  text-align: left;
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default SelectPopup
