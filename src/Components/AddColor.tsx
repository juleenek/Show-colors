type Props = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const AddColor: React.FC<Props> = ({ color, setColor }) => {
  return (
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
    <input
      id='addColor'
      type='text'
      role='addColor'
      placeholder='Add color name'
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  </form>
  );
};