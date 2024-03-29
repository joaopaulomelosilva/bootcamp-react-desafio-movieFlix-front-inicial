import './styles.css';
import { ReactComponent as ArrowIcon } from '../../assets/images/Seta.svg';
import ReactPaginate from 'react-paginate';

type Props = {
    pageCount: number;
    range: number;
    onChange?: (pageNumber: number) => void;
}


const Pagination = ( { pageCount, range, onChange } : Props ) => {

    return( 

        <ReactPaginate 
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            

            containerClassName='pagination-container'
            pageLinkClassName='pagination-item'
            breakClassName='pagination-item'

            previousClassName='arrow-previous'
            nextClassName='arrow-next'
            previousLabel={<ArrowIcon />}
            nextLabel={<ArrowIcon />}

            activeLinkClassName='pagination-item-active'
            disabledClassName='arrow-inactive'

            onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
        />
        
    );
}

export default Pagination;