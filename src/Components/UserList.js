import React from 'react'
import {Card, ListGroup} from "react-bootstrap"

const UserList = ({nme, mbl, mail}) => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Header>{nme}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{mbl}</ListGroup.Item>
    <ListGroup.Item>{mail}</ListGroup.Item>
  </ListGroup>
</Card>
    )
}

export default UserList
