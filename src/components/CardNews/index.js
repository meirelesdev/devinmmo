import * as C from './Styles'
// const noticia = {
//     article_content: "<p><img class=\"aligncenter size-large\" src=\"../file/2021/11/ark-lost-island-709x418.jpg\" alt=\"Ark Lost Island\" width=\"709\" height=\"418\" /></p>\r\n<p>A new island beckons to Ark: Survival Evolved players, revealed during Studio Wildcard's Extra Life stream this past weekend. Lost Island is an enormous 150 square kilometer land mass that plays host to new biomes, challenges, ruins, and three new wild creatures for players to fight and tame: Amargasaurus, Sinomacrops, and Dinopithecus.</p>\r\n<p>The fearsome <a href=\"https://survivetheark.com/index.php?%2Farticles.html%2Fcommunity-crunch-274-introducing-lost-island-amargasaurus-and-more-r1784%2F\" target=\"_blank\" rel=\"noopener\">Amargasaurus</a> has two rows of parallel spines running along its length that it can eject to unleash cold- or fire-based attacks. The <a href=\"https://survivetheark.com/index.php?%2Farticles.html%2Fcommunity-crunch-282-introducing-sinomacrops-sponsored-mods-evo-event-and-more-r1817%2F\" target=\"_blank\" rel=\"noopener\">Sinomacrops</a> is a \"friendly and curious little pterosaur\" that survivors can domesticate and attach to their backs to provide gliding capabilities. The <a href=\"https://survivetheark.com/index.php?%2Farticles.html%2Fcommunity-crunch-278-introducing-dinopithecus-beginner-server-wipe-and-more-r1796%2F\" target=\"_blank\" rel=\"noopener\">Dinopithecus</a> is an aggressive baboon-like creature that, as you can tell from the video below, hurls its own poo at enemies. If there was ever a game that needed a creature that threw poo, it would be Ark.</p>\r\n<p>Lost Island comes to Ark on all platforms as a free DLC update on December 14. The video also dropped a mention of the game's next update, Fjordur, which will arrive in June 2022.</p>\r\n<p>The weekend's streams weren't just good for showing off the game's upcoming content. The Studio Wildcard team raised $187,764 for the Children's Miracle Network during its Extra Life stream, which was the highest amount raised by any team. Kudos to Studio Wildcard and to everyone who donated!</p>\r\n<p><iframe src=\"https://www.youtube.com/embed/dQMoC8IQe3U\" title=\"YouTube video player\" width=\"560\" height=\"315\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"></iframe></p>",
//     article_url: "https://www.mmobomb.com/news/ark-next-island-introduces-three-new-animals-including-friendly-glider-monkey",
//     id: 130673,
//     main_image: "https://www.mmobomb.com/file/2021/11/ark-lost-island.jpg",
//     short_description: "Lost Island arrives in December as a free update; Fjordur coming in mid-2022.",
//     thumbnail: "https://www.mmobomb.com/file/2021/11/ark-lost-island-218x150.jpg",
//     title: "Ark's Next Island Introduces Three New Animals, Including A Friendly Glider-Monkey",
// }
const CardNews = ({news}) => {
    console.log(news)
    return (
        <C.ContanerNews>
            <C.CardImageNews src={news.main_image} alt={news.title} />
            <C.NewsContent>
                <C.NewsTitle>{news.title}</C.NewsTitle>
                <C.NewsDescription>{news.short_description}</C.NewsDescription>
                <C.NewsLink to={{pathname: news.article_url}} target="_blank">VER NO SITE</C.NewsLink>
            </C.NewsContent>
        </C.ContanerNews>
    )
}

export default CardNews