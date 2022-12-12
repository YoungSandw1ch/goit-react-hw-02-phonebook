import { FilterLabel, Input, Span } from './Filter.styled';
import { Box } from 'components/Common';

export const Filter = () => {
  return (
    <Box width="item" mx="auto" mb={4}>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input />
      </FilterLabel>
    </Box>
  );
};
