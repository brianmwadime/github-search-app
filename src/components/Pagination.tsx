import Styled from "styled-components";

interface PaginationProps {
  start?: string | null;
  end?: string | null;
  next?: boolean;
  previous?: boolean;
  onPage: Function;
  
}

const Pagination = (props: PaginationProps) => {
  return (
    <PaginationWrapper className="pagination my-2">
        <button data-testid="previous" disabled={!props.previous} className='btn mx-1 btn-sm btn-pagination bi bi-chevron-left'
        onClick={() => props.onPage("last", 'before: "' + props.start + '"')} >
        </button> 
        <button data-testid="next" disabled={!props.next} className='btn mx-1 btn-sm btn-pagination bi bi-chevron-right'
        onClick={() => props.onPage("first", 'after: "' + props.end + '"')} >
        </button>
    </PaginationWrapper>
    

  )
};

export default Pagination;

const PaginationWrapper = Styled.div`
  .btn-pagination {
    background-color: #000;
    border-color: #000;
    color: white;
    border-radius: 10px;
    &:disabled {
      border-color: #F3F3F3;
      background-color:#F3F3F3;
      opacity:1;
      color:#B0B7C3;
    }
  }
`;