import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import CalendarForm from './CalendarForm'
import Filter from './Filter'

function AppContainer(props) {
    return (
        <div>
            <CalendarForm />
            <UserForm />
            <Filter articles = {props.articles}/>
            <ArticleList articles={props.articles}/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer
