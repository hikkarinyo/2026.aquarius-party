import { Button } from '@mantine/core'

interface SpinButtonProps {
  isSpinning: boolean
  onClick: () => void
}

const SpinButton = ({ isSpinning, onClick }: SpinButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={isSpinning}
      size="md"
      style={{
        background: '#ff00cc',
        opacity: isSpinning ? 0.6 : 1,
        cursor: isSpinning ? 'not-allowed' : 'pointer',
        boxShadow: '0 0 10px rgba(255,0,204,0.8), 0 0 20px rgba(255,0,204,0.6)',
      }}
    >
      {isSpinning ? 'Крутится…' : 'Крутить'}
    </Button>
  )
}

export default SpinButton
