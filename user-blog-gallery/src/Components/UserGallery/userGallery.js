import React from 'react'
import './style.css'
import UserCards from '../UserCard/userCard'


class UserGallery extends React.Component {

    // lifecycle method
    constructor(props) {
        super(props)
        this.state = { users: [], isLoading: false, currentPage: 0 }
    }


    fetchUser = () => {
        const pageToFetch = this.state.currentPage + 1
        const url = `https://reqres.in/api/users?page=${pageToFetch}`
        this.setState({ isLoading: true })
        fetch(url, {
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(result => {
            const allUsers = [...this.state.users, ...result.data];
            // console.log(result.data)
            this.setState({ users: allUsers, currentPage: pageToFetch, isLoading: false })
        }).catch(error => {
            this.setState({ isLoading: false })
        })
    }


    // lifecycle method
    componentDidMount = () => {
        this.fetchUser()
    }

    // lifecycle method
    render = () => {
        return (
            <div className="container">
                <p className="title">-------User Gallery--------</p>
                <div>
                    {
                        this.state.users.map(user => {
                            return (
                                <UserCards key={user.id} picUrl={user.avatar}
                                    firstName={user.first_name} lastName={user.last_name} email={user.email} />
                            );
                        })
                    }
                </div>
                {
                    this.state.isLoading ? (
                        <span className="loading-text">Loading ... </span>
                    ) : (
                            <button className="btn btn-primary" onClick={this.fetchUser} disabled={this.state.currentPage >= 2}>Load More</button>
                        )
                }

            </div>
        )
    }

}

export default UserGallery