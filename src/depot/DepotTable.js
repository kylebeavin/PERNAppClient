import React from 'react';

const DepotTable = (props) => {
    return (
        <div>
          {
              props.display.map((user, id) => {
                  return (
                        <div>
                            {user.firstname}
                            {user.lastname}
                        </div>
                  )
              })
          }
        </div>
    )
}

export default DepotTable;