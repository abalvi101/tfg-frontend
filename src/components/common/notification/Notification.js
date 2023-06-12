import { useState, useEffect } from "react";

export const Notification = ({ className, type, message, onClose, index, total }) => {
  const [left, setLeft] = useState('0');
  const [bottom, setBottom] = useState((total - index - 1) * 52 + 6);
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    setOpacity('1');
    setTimeout(() => {
      setLeft('100%');
    }, 3000);
    setTimeout(() => {
      onClose();
    }, 3800);
  }, []);

  useEffect(() => {
    setBottom((total - index - 1) * 52 + 6);
  }, [index])

  return (
    <div className={className} style={{left, opacity, bottom}}>
      <span className="color-bar" />
      <div className="info">
        <header>{type}</header>
        <div>{message}</div>
      </div>
    </div>
  )
}