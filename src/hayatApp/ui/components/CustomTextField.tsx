import TextField from '@mui/material/TextField';
import { Box, SxProps, Theme, styled } from '@mui/material';

interface CustomTextFieldProps{
    sx?: SxProps<Theme> | undefined
    label: string;
    type?: React.HTMLInputTypeAttribute | undefined
    placeholder?: string | undefined
    name?: string | undefined
    value?: unknown
    error?: boolean | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
    helperText?: React.ReactNode
}

export const Underline = styled(Box)(({ theme }) => ({
  height: '1px',
  width: '100%',
  backgroundColor: 'rgba(38,38,38,0.7)',
  marginTop: theme.spacing(0),
  zIndex:1
}));


export const CustomTextField: React.FC<CustomTextFieldProps> = ({sx, label, ...props}) => {

  return (
    <Box sx={sx} display='flex' flexDirection='column' >
      <TextField
        label={label}
        
        fullWidth
        InputLabelProps={{ style: { 
          color: 'rgba(38,38,38,0.8)'} }}
        InputProps={{ style: { color: 'rgba(38,38,38,1)' } }} 
        sx={{
          '& .MuiOutlinedInput-root': {
            fontSize: '15px',
            fontWeight: '500',
            '& input::placeholder': {
              fontWeight: 'bold',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
            borderColor: 'rgba(248,248,248,0.5)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(248,248,248,1)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(248,248,248,1)',
          },
          
          zIndex: 1
        }}
        {...props}
      />
      <Underline />
    </Box>
  );
};