
interface UserProps {
  url?: string;
  name?: string;
  bio?: string;
  email?: string;
  id: any;
}

const UserCard = (props: UserProps) => {
  return (
    <li className='list-group-item' data-testid="key" key={props.id}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex flex-column'>
          <a className='h5 mb-0 text-decoration-none' data-testid="name" href={props.url} target="_blank" rel="noreferrer">
            {props.name} <span data-testid="email" className="small">{props.email}</span>
          </a>
          <p style={{margin: "0px"}} data-testid="description" className="description">{props.bio}</p>
          
        </div>
       
      </div>
    </li>
  );
};

export default UserCard;