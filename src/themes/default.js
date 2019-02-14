import { rgba } from '../utils'

export default {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Arial, Arial Unicode, "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif',
  colors: {
    border: '#d0d8e1',
    primary: '#0088ff',
    secondary: '#222c4f',
    background: '#f4f4f7',
    success: '#3dc86f',
    error: '#ec3c3c',
    text: '#333333'
  },
  content: {
    padding: '0.6em',
    borderRadius: '4px',
    fontSize: '14px',
    boxShadow: `0 6px 30px 2px ${rgba('#222c4f', 0.3)}`
  },
  header: {
    color: 'white',
    backgroundColor: '#222c4f'
  },
  loader: {
    color: '#ffffff',
    size: '4em',
    width: '3px'
  },
  button: {
    boxShadow: `0 2px 8px 2px ${rgba('#0087ff', 0.2)}`
  },
  trigger: {
    color: '#333333',
    hoverColor: 'inherit',
    backgroundColor: '#ffffff',
    border: 'none',
    padding: '12px 1.25em',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 'normal',
    boxShadow: '0 3px 12px 1px rgba(34, 44, 79, 0.1)',
    hoverBoxShadow: '0 6px 16px 2px rgba(0, 0, 0, 0.2)',
    hoverBackgroundColor: 'inherit'
  },
  input: {
    backgroundColor: 'white',
    padding: '0.5em',
    color: '#444444',
    fontSize: '14px',
    borderRadius: '4px',
    boxShadow: `0 0 8px ${rgba('#0087ff', 0.3)}`
  },
  label: {
    color: '#0087ff',
    fontSize: '11px'
  },
  tab: {
    selectedColor: 'white',
    selectedBackgroundColor: '#0087ff',
    border: '1px solid #d0d8e1',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  image: {
    height: '140px',
    borderRadius: '4px',
    border: '1px solid #d0d8e1'
  },
  uploadButton: {
    backgroundColor: 'white',
    hoverBackgroundColor: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid #d0d8e1'
  },
  overlay: {
    backgroundColor: rgba('#222c4f', 0.4)
  }
}
