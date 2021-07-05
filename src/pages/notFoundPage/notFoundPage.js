import './notFoundPage.scss';
import { WORDINGS } from '../../wordings';

export const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>{WORDINGS.CONTENT_NOT_FOUND}</h1>
        </div>
    )
}
