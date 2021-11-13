import * as C from './Styles'

const CardNews = ({news}) => {
    return (
        <C.ContanerNews>
            <C.CardImageNews src={news.main_image} alt={news.title} />
            <C.NewsContent>
                <C.NewsTitle>{news.title}</C.NewsTitle>
                <C.NewsDescription>{news.short_description}</C.NewsDescription>
                <C.Buttons>
                    <C.NewsLink to={{pathname: news.article_url}} target="_blank">VER NO SITE OFFICIAL</C.NewsLink>
                </C.Buttons>
            </C.NewsContent>
        </C.ContanerNews>
    )
}

export default CardNews