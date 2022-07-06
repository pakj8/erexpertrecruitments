import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../../components/NavigationBar";

function Blogs() {
  const text1 = `"On the other hand, we denounce with righteous indignation and
  dislike men who are so beguiled and demoralized by the charms of
  pleasure of the moment, so blinded by desire, that they cannot
  foresee the pain and trouble that are bound to ensue; and equal
  blame belongs to those who fail in their duty through weakness of
  will, which is the same as saying through shrinking from toil and
  pain. These cases are perfectly simple and easy to distinguish. In
  a free hour, when our power of choice is untrammelled and when
  nothing prevents our being able to do what we like best, every
  pleasure is to be welcomed and every pain avoided. But in certain
  circumstances and owing to the claims of duty or the obligations
  of business it will frequently occur that pleasures have to be
  repudiated and annoyances accepted. The wise man therefore always
  holds in these matters to this principle of selection: he rejects
  pleasures to secure other greater pleasures, or else he endures
  pains to avoid worse pains."`;

  const text2 = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui
  blanditiis praesentium voluptatum deleniti atque corrupti quos
  dolores et quas molestias excepturi sint occaecati cupiditate non
  provident, similique sunt in culpa qui officia deserunt mollitia
  animi, id est laborum et dolorum fuga. Et harum quidem rerum
  facilis est et expedita distinctio. Nam libero tempore, cum soluta
  nobis est eligendi optio cumque nihil impedit quo minus id quod
  maxime placeat facere possimus, omnis voluptas assumenda est,
  omnis dolor repellendus. Temporibus autem quibusdam et aut
  officiis debitis aut rerum necessitatibus saepe eveniet ut et
  voluptates repudiandae sint et molestiae non recusandae. Itaque
  earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
  voluptatibus maiores alias consequatur aut perferendis doloribus
  asperiores repellat."`;

  const text3 = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est
  laborum.""Sed ut perspiciatis unde omnis iste natus error sit
  voluptatem accusantium doloremque laudantium, totam rem aperiam,
  eaque ipsa quae ab illo inventore veritatis et quasi architecto
  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
  porro quisquam est, qui dolorem ipsum quia dolor sit amet`;

  return (
    <div className="overflowHide">
      <Head>
        <title>Blogs</title>
        <meta name="description" content="ER Expert Recruitment" />
        <link rel="icon" href="/ER.ico" />
      </Head>
      <div id="blogs">
        <NavigationBar />
        <h1 className="display-1 text-center blog-title text-light">
          Our Blogs
        </h1>
      </div>
      <div className="container">
        <div className="row blogsContainer">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div>
              <Image
                className="blogs-img"
                src="https://res.cloudinary.com/dh7xchikj/image/upload/v1657088990/Recruitments/pexels-drew-williams-3098619_ecjdz4.jpg"
                width={400}
                height={500}
                alt="ER Blogs"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 themeColor">
            <h2>What is Lorem Ipsum?</h2>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h3>
            <p className="blogsContent ">{text1}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 themeColor">
            <p className="mt-5">{text2}</p>
            <p className="mt-5">{text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
