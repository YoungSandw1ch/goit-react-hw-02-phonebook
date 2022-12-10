import { Box } from 'components/Common/Box';

export const Container = ({ children }) => {
  return (
    <Box mx="auto" width="container" px={4}>
      {children}
    </Box>
  );
};
