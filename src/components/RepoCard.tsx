
import {numberFormatter, timeAgo} from "../utility";

interface RepoInfoProps {
  url?: string;
  name?: string;
  description?: string;
  stargazerCount?: number;
  id: any;
  licenseInfo?: string;
  primaryLanguage?: string,
  repo?: object,
  updatedAt?: string
}

const RepoCard = (props: RepoInfoProps) => {
  return (
    <li className='list-group-item' key={props.id}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex flex-column'>
          <a className='h5 mb-0 text-decoration-none' data-testid="name" href={props.url} target="_blank" rel="noreferrer">
            {props.name}
          </a>
          <p className="description" data-testid="description">{props.description}</p>
          <p  className='small' data-testid="info"> {numberFormatter(props.stargazerCount!)} Stars | {props.primaryLanguage ?? 'Language not set'} | {props.licenseInfo ?? 'No licence available'} | Updated {timeAgo(new Date(props.updatedAt!))}</p>
        </div>
       
      </div>
    </li>
  );
};

export default RepoCard;