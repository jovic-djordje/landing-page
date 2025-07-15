import { SiDatabricks } from "react-icons/si";
import { TiFlowMerge } from "react-icons/ti";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuNetwork } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { PiDatabase } from "react-icons/pi";

const DiscoverSection = () => {
  const cards = [
    {
      id: 1,
      img: <SiDatabricks className="discover-card-icon" />,
      title: "Operational BI",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
    {
      id: 2,
      img: <TiFlowMerge className="discover-card-icon" />,
      title: "Data Visualization",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
    {
      id: 3,
      img: <HiOutlineDesktopComputer className="discover-card-icon" />,
      title: "Machine Learning",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
    {
      id: 4,
      img: <LuNetwork className="discover-card-icon" />,
      title: "Natural Language Processing",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
    {
      id: 5,
      img: <CiLock className="discover-card-icon" />,
      title: "Privacy & Security",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
    {
      id: 6,
      img: <PiDatabase className="discover-card-icon" />,
      title: "Data Mining",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt cupiditate aliquam rem. Nulla dolore culpa dolorem iusto harum debitis tenetur, quasi esse, nostrum nemo odit voluptate ipsum distinctio quo",
    },
  ];

  return (
    <div className="discover-section">
      <div className="discover-section-holder">
        <h2 className="discover-section-heading">Discover your insights</h2>
        <p className="discover-section-subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci
          in consequuntur repudiandae voluptas. Hic laborum architecto dolorum
          eos eligendi sint nesciunt voluptas suscipit modi.
        </p>
        <div className="discover-card-holder">
          {cards.map((card) => (
            <div className="discover-card" key={card.id} id={`card-${card.id}`}>
              <div className="discover-card-width-holder">
                {card.img}
                <h3 className="discover-card-title">{card.title}</h3>
                <p className="discover-card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
