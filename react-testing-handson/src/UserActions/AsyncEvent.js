import React from 'react'
function getUser() {
    return Promise.resolve({ id: '1', name: 'Robin' });
  }
   
function AsyncEvent() {
    const [user, setUser] = React.useState(null);
   
    React.useEffect(() => {
      const loadUser = async () => {
        const user = await getUser();
        setUser(user);
      };
   
      loadUser();
    }, []);
   
    return (
      <div>
        {user ? <p>Signed in as {user.name}</p> : null}
      </div>
    );
  }

  export default AsyncEvent