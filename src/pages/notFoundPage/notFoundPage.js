import './notFoundPage.scss';
import { WORDINGS } from '../../wordings';

export const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>{WORDINGS.NOT_FOUND_DISCLAIMER}</h1>
        </div>
    )
}
