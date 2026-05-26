export const inputStylesStepOne = {
  bg: 'app.bg',
  borderColor: 'app.border',
  color: 'app.text',
  borderRadius: 'xl',
  _focus: { borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' },
  _hover: { borderColor: 'brand.400' },
};

export const selectStylesStepOne = {
  ...inputStylesStepOne,
  w: 'full',
  px: 3,
  py: '9px',
  borderWidth: '1px',
  fontSize: 'sm',
  fontWeight: 'semibold',
  outline: 'none',
  cursor: 'pointer',
};

export const selectStylesTwo = {
  bg: 'app.bg',
  borderColor: 'app.border',
  color: 'app.text',
  borderRadius: 'xl',
  w: 'full',
  px: 3,
  py: '9px',
  borderWidth: '1px',
  fontSize: 'sm',
  fontWeight: 'semibold',
  outline: 'none',
  cursor: 'pointer',
  _focus: { borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' },
  _hover: { borderColor: 'brand.400' },
};
