import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { SearchButton } from './SearchElements'

const Search = ({ handleInputChange, handleFormSubmit, questionSearch }) => {
    return (
        <div>
            <Card className='my-3 mx-3 rounded topic__card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" value={questionSearch} onChange={handleInputChange} />
                        <Button variant="outline-success" size="sm" type="submit" onClick={handleFormSubmit}>
                            <Link to={`/searchresults/`}>
                                <SearchButton />
                            </Link>
                        </Button>


                    </Form>
                </Card.Body>

            </Card>

        </div>
    )
}

export default Search
