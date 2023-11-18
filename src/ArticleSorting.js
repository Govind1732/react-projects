import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'

const ArticleSorting = ({ articles }) => {

    const [data, setData] = useState(articles)
    const upvotesort = () => {
        const copyupvote = [...data]
        const sortedData = copyupvote.sort((a, b) => b.upvotes - a.upvotes)
        setData(sortedData)
    }
    const mostRecentsort = () => {
        const copyrecent = [...data]
        const sortedrecent = copyrecent.sort((a, b) => new Date(b.date) - new Date(a.date))
        setData(sortedrecent)
    }
    return (
        <div>
            <div style={{ textAlign: "center", margin: "50px" }}>
                Sort By:{'  '}
                <Button variant='primary' onClick={upvotesort}>Most Upvote</Button>{'  '}
                <Button variant='primary' onClick={mostRecentsort}>Most Recent</Button>
            </div>

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            const { title, upvotes, date } = item
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{title}</td>
                                    <td>{upvotes}</td>
                                    <td>{date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ArticleSorting
