import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";

function Card({ type, src }) {
  const navigate = useNavigate();
  const handleCardClick = (type) => {
    switch (type) {
      case "mobile": {
        navigate("/mobile");
        break;
      }
      case "washingMachine": {
        navigate("/washing-machine");
        break;
      }
    }
  };
  return <img src={src} onClick={async () => await handleCardClick(type)} />;
}

function BodyComponent() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Carousel showIndicators={false}>
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697092978/Croma%20Assets/CMS/PCP/Oct-2023/PCP-Main/Updated%20PCPs/Refrigerator/MPCP_ref_11Oct23_qsyjkj.png?tr=w-1000" />
        </div>
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697014367/Croma%20Assets/CMS/PCP/Oct-2023/PCP-Main/Speakers%20n%20Media%20Players/PCP_Speaker_mediaplayer_11oct2023_tnm3ku.png?tr=w-2048" />
        </div>
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697092978/Croma%20Assets/CMS/PCP/Oct-2023/PCP-Main/Updated%20PCPs/Refrigerator/MPCP_ref_11Oct23_qsyjkj.png?tr=w-1000" />
        </div>
      </Carousel>
      <div className="card__item">
        <Card
          type="mobile"
          src={
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024"
          }
        />
        <Card
          type="washingMachine"
          src={
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Washing_machines_izyrnd.png?tr=w-1024"
          }
        />
        <Card
          type="television"
          src={
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024"
          }
        />
        <Card
          type="airconditioner"
          src={
            "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Air_Conditioner_a4hg1z.png?tr=w-1024"
          }
        />
      </div>

      <div className="grid__item">
        {products &&
          products.map((item, index) => {
            return (
              <div key={index + item.title}>
                <img src={item.image} />
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default BodyComponent;
