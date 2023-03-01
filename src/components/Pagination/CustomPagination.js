import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { createTheme, ThemeProvider } from '@material-ui/core'

const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
})

export const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }
  return (
    <div>
        <ThemeProvider theme={darkTheme}>
            <Pagination 
                count={numOfPages} 
                onChange={(e) => handlePageChange(e.target.textContent)}
                color='primary'
                hideNextButton  //Hides the next button
                hidePrevButton  //Hides the previous button
                />
        </ThemeProvider>
       
    </div>
  )
}
