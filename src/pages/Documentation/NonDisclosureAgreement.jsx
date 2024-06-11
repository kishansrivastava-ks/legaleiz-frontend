/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../components/Documentation/ScrollableContainer";

const Info = styled.div`
  width: 100vw;
  background-color: blue;
  color: #fff;
  padding: 3vmax 10vmax;
  font-size: 3vmax;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  border: 1rem solid #fff;
`;

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

const sections = [
  {
    heading: "Overview of Non Disclosure Agreement",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 1...",
  },
  {
    heading: "Types of Non Disclosure Agreement",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 2...",
  },
  {
    heading: "Non Disclosure Agreement Benefits",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 3...",
  },
  {
    heading: "Non Disclosure Agreement Format",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 4...",
  },
  {
    heading: "Key Elements of NDA",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Non Disclosure Agreement Procedure",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Exclusions to NDAs",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Read World Example of an NDA",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "When do you need a Non Disclosure Agreement?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "NDA Requirements",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Non Disclosure Agreement Template",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "If you violate a Non Disclosure Agreement",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Information protected with NDA",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "Why LegalEiz",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
  {
    heading: "FAQs",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore excepturi voluptatum, odio asperiores ab quibusdam omnis, libero et doloribus fuga est accusantium placeat iure culpa error perferendis commodi earum sunt id, ea dolores quos facere illo. Nesciunt reiciendis, eos debitis ipsum delectus fuga architecto maiores consequuntur possimus minus qui itaque amet distinctio perspiciatis. Nisi nam eveniet reiciendis odit quaerat aliquam ipsum optio necessitatibus voluptate quibusdam repudiandae perferendis labore dolorem nulla voluptatem vel repellat, molestias quo quas aperiam ipsa! Quam suscipit minus laboriosam quia accusamus nostrum dolore, autem corporis hic. Similique numquam ducimus eum voluptate, rem expedita libero accusamus delectus. Impedit beatae sint reiciendis delectus quam esse ratione repudiandae? Eum itaque temporibus deleniti sint quos expedita! Ratione nulla, consequatur excepturi harum hic aut molestiae est corporis modi. Quidem veniam dolorem atque quasi ipsam perspiciatis, nulla quae eligendi. Voluptas praesentium magni quos incidunt provident harum, perspiciatis unde odio laboriosam, eveniet earum? 5...",
  },
];
function NonDisclosureAgreement() {
  return (
    <>
      <Info>Non Disclosure Agreement</Info>
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}
export default NonDisclosureAgreement;
