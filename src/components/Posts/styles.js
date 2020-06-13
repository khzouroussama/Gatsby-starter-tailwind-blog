import styled from 'styled-components';
import tw from 'twin.macro';

export const Posts = styled.div`
  ${tw`p-3 `};
`;

export const PostCard = styled.div`
  ${tw`w-full sm:flex m-3 rounded-lg
    shadow-lg hover:shadow-xl `};
`;

export const Content = styled.div`
  ${tw`h-auto sm:h-48
   border-r border-b border-l
    border-gray-400 sm:border-l-0 
    sm:border-t sm:border-gray-400
    bg-white rounded-b-lg 
    sm:rounded-b-none sm:rounded-r-lg
    p-4 flex flex-col justify-between
    leading-normal`};
`;

export const Excerpt = styled.p`
    ${tw`text-gray-700  text-base`};
`;

export const Image = styled.figure`
  ${tw`h-48 lg:h-auto sm:w-48 flex-none 
  bg-cover rounded-t-lg sm:rounded-t-none
   sm:rounded-l-lg text-center shadow-lg
   overflow-hidden`};
`;

