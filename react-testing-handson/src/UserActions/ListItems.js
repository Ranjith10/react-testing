import React from 'react'

const ListItems = ({contactsList}) => {
    if(!contactsList || !contactsList.length) {
        return <div>No Contacts Found</div>
    }
    return (
        contactsList.map((contact, index) => {
            return (
                <div data-testid='contact-name'>
                    {contact['name']}         
                </div>

            )
        })
        
    )
}

export default ListItems
