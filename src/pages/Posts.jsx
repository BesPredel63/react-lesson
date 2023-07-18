import React, {useState, useEffect} from 'react';
import PostForm from "../components/Forms/PostForm";
import PostItem from "../components/Lists/Post/PostItem";
import PostFilter from "../components/Filters/PostFilter";
import ModalPosts from "../components/UI/ModalWindows/ModalPosts/ModalPosts";
import ButtonAdd from "../components/UI/Buttons/ButtonAdd";
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

const Posts = () => {
    // статический массив первичных данных
    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'ReactJS', body: 'Facebook'},
    //     {id: 2, title: 'AngularTS', body: 'Google'},
    //     {id: 3, title: 'JavaScript', body: 'WebDev'},
    // ])
    // дубликат хука для принятия данных по запросу от сервера
    const [posts, setPosts] = useState([])
    // через подобный хук работаем с фильтрацией и поиском
    const [filter, setFilter] = useState({sort: '', query: ''})
    // усправление модального окна
    const [modal, setModal] = useState(false)
    // кастомный хук, который занимается фильтрацией и сортировкой
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    // отслеживаем общее кол-во полученных объектов по запросу от сервиса
    const [totalPages, setTotalPages] = useState(0)
    // хук для обработки параметов пагинации
    // лимит объектов на странице
    const [limit, setLimit] = useState(10)
    // номер текущей страницы
    const [page, setPage] = useState(1)
    // вызов кастомного хука, в нем реализован функционал загрузки данных с сервере +
    // + иконка загрузчика + вывод сообщения об ошибке
    const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        // берем значение общего кол-ва объектов
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts(limit, page)
    }, [])
    // функция создания нового поста
    const createPost = (newPost) => {
        // создаем новый пост
        setPosts([...posts, newPost])
        // закрываем модально окно после создания нового поста
        setModal(false)
    }
    // функция удаления существующего поста
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div>
            <h1>Список постов</h1>
            <button className='btn btn-outline-dark mt-4' onClick={fetchPosts}>Запрос</button>
            <ButtonAdd onClick={() => setModal(true)}>
                &nbsp;Добавить пост&nbsp;
            </ButtonAdd>
            <ModalPosts visible={modal} setVisible={setModal}>
                <PostForm posts={posts} setPosts={setPosts} create={createPost}/>
            </ModalPosts>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>
            {postError &&
                <>
                    <h3>Произошла ошибка!</h3>
                    <p style={{textAlign: 'center', color: 'red'}}>${postError}</p>
                </>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 25}}>
                    <Loader />
                  </div>
                : <PostItem posts={sortedAndSearchedPosts} remove={removePost}/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
};
export default Posts;