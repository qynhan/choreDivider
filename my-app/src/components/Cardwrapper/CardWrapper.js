import React, { useEffect, useCallback, useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";

import ProductCard from "../Cards/ProductCard";

import HeadsetImg from "../../image/carousel_img1.png";
import LaptopImg from "../../image/carousel_img2.png";
import PhoneImg from "../../image/carousel_img3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

const defaultCardItems = [
  <ProductCard key={"child1"} img={HeadsetImg} />,
  <ProductCard key={"child2"} img={LaptopImg} />,
  <ProductCard key={"child3"} img={PhoneImg} />,
];

const details = [
  {
    title: "Manage Chores",
    sub: `Manage and divide up chores
        between friends and keep up with
        tasks throughout a group.`,
  },
  {
    title: "Enable notifications",
    sub: `Stay on top of your daily tasks with 
    notifications to remind you
    throughout the day.`,
  },
  {
    title: "Care for a pet",
    sub: `Earn points by completing daily 
    tasks and take care of a personalized
    pet.`,
  },
];

const setCardStatus = (indexes, cardIndex) => {
  if (indexes.currentIndex === cardIndex) {
    return styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } else if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
};

const CardWrapper = ({
  style,
  onCardChange,
  containerClassName,
  cardClassName,
  leftButton,
  rightButton,
  autoRotate = true,
  rotationInterval = 2000,
  children,
}) => {
  const cardItems = children || defaultCardItems;
  const [indexes, setIndexes] = useState({
    previousIndex: cardItems.length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });

  const classes = useStyles();

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  const handleLeftButton = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 2,
        currentIndex: cardItems.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        nextIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        previousIndex:
          prevState.currentIndex - 1 <= 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    onCardChange && onCardChange(indexes);
    const transitionInterval = setInterval(() => {
      autoRotate && handleCardTransition();
    }, rotationInterval);
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, autoRotate]);

  return (
    <div className={`${styles.container} ${classes.container}`}>
      {leftButton ? (
        <span onClick={handleLeftButton}>{leftButton}</span>
      ) : (
        <span className="btn" onClick={handleLeftButton}>
          <ArrowBack style={{ fontSize: 20 }} />
        </span>
      )}
      <ul
        style={{ ...style }}
        className={`${styles.cardCarousel} ${
          containerClassName ? containerClassName : styles.carouselDefault
        }`}
      >
        <li
          key="child1"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 0)}`}
        >
          <ProductCard
            key={"child1"}
            show={indexes.currentIndex === 0}
            img={HeadsetImg}
            title={details[0].title}
            detail={details[0].sub}
          />
        </li>
        <li
          key="child2"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 1)}`}
        >
          <ProductCard
            key={"child2"}
            show={indexes.currentIndex === 1}
            img={LaptopImg}
            title={details[1].title}
            detail={details[1].sub}
          />
        </li>
        <li
          key="child3"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 2)}`}
        >
          <ProductCard
            key={"child3"}
            show={indexes.currentIndex === 2}
            img={PhoneImg}
            title={details[2].title}
            detail={details[2].sub}
          />
        </li>
      </ul>
      {rightButton ? (
        <span onClick={handleCardTransition}>{rightButton}</span>
      ) : (
        <span className="btn" onClick={handleCardTransition}>
          <ArrowForward style={{ fontSize: 20 }} />
        </span>
      )}
    </div>
  );
};

export default CardWrapper;
