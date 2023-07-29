import { FacebookFilled, GoogleSquareFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
// import { Footer } from 'antd/es/layout/layout';
import Link from 'next/link';
import React from 'react';
import styles from "@/styles/Home.module.css";

const FooterComponent = () => {
    return (
      <footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Builder Pro
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC Builder Pro @ Samss Jubair
      </footer>
    );
};

export default FooterComponent;