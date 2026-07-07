import { useState } from 'react'
import { tasks } from './data.js'
import './Pagination.css'
export default function Pagination() {
    const [pageNumber, setPageNumber] = useState(1);
    const numberOfTasksPerPage = 5;

    const tasksLength = Math.ceil(tasks.length / numberOfTasksPerPage);

    const LastIndex = numberOfTasksPerPage * pageNumber;
    const StartingIndex = LastIndex - numberOfTasksPerPage;

    function getVisiblePages(tasksLength, currPage) {
        if (tasksLength <= 5) {
            return Array.from({ length: tasksLength }, (_, i) => i + 1)
        }
        const pages = [];

        pages.push(1);

        const start = Math.max(2, currPage - 1);
        const end = Math.min(tasksLength - 1, currPage + 1)

        if (start > 2) {
            pages.push('...')
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < tasksLength - 1) {
            pages.push('...');
        }
        pages.push(tasksLength);

        return pages;

    }
    const pageButtons = getVisiblePages(tasksLength, pageNumber)

    console.log(tasksLength, pageButtons)
    return (
        <div className="pagination">
            <h1>Pagination</h1>
            {
                tasks.slice(StartingIndex, LastIndex).map((task) => (
                    <div className="task" key={task.id}>
                        <h1>{task.title}</h1>
                    </div>
                ))
            }
            <div className="page-buttons">
                <button disabled={pageNumber == 1} onClick={() => setPageNumber(prev => prev - 1)}>prev</button>
                {
                    pageButtons.map((page, idx) => (
                        page === '...' ? <span key={idx}>...</span> : <button
                            className='btns'
                            onClick={() => setPageNumber(page)}
                            className={page === pageNumber ? "Active" : ""}
                        >{page}</button>
                    ))
                }
                <button disabled={pageNumber == tasksLength} onClick={() => setPageNumber(prev => prev + 1)} >next</button>
            </div>
        </div>
    )
}
