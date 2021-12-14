// localhost:3000/blog/

import { getPosts } from 'helper';
import Image from 'next/image';

const Blog = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title} </Link>
                </li>
            ))}
        </ul>
    );
};

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
