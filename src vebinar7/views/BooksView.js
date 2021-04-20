// import React from 'react';
 
// const BooksView = () => {
//     return ( <h1>Книг стор</h1> );
// }

// export default BooksView;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
        /* Шаблон: Робимо http запит
        // class BooksView extends Component {
        //     state = {}
        //     render() {
        //         return ();
        //     }
        // }
        // export default ;
        */
class BooksView extends Component {
    state = {
        books:[],      
    };

    async componentDidMount() {
        const response = await Axios.get(' http://localhost:4040/books ');
        console.log(response.data);

        this.setState({ books: response.data });
    }

    render() {
        return (
            <>
                <h1>Це сторінка Книг</h1>
                <ul>
                    {this.state.books.map(book => (
                    <li key={book.id}>
                        <Link to={`${this.props.match.url}/${book.id}`}>
                            {book.title}
                        </Link>
                    </li>
                    ))}
                </ul>
            </> 
        );
    }
}

export default BooksView;
