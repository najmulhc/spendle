import styles from './home.module.css'
export default function page() {
  return (
    <main>
      <h1 className={styles.title}>Spendle, Your personal accountent!</h1>
      <h2>Heading 2 of the texsdt</h2>
      <h3>Third heading of the text</h3>
      <h4>Fourth heading that we may need but not that often</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere nesciunt eum ullam magnam unde magni exercitationem, quis laborum iste vel omnis aliquid veritatis, maxime neque quam cupiditate itaque incidunt facilis porro. Exercitationem earum laboriosam quaerat, inventore fugiat recusandae molestias molestiae ipsam aliquam? Iure tenetur odit et consectetur totam ratione voluptas! Reiciendis, alias, ut cum nihil modi laborum unde obcaecati et est molestias corporis tempora sapiente omnis quas vel animi ipsum, commodi impedit dolores possimus inventore placeat a! Nam porro fuga quam quis quo, eum amet facilis at voluptates id praesentium numquam magni omnis accusamus explicabo mollitia! Et voluptatibus asperiores, exercitationem vel corporis sint quo a quidem. Aperiam deserunt ex placeat sed consequuntur assumenda, beatae temporibus quos in commodi rem adipisci suscipit a iusto! Doloremque culpa alias fugit quam labore distinctio hic ipsum ducimus praesentium explicabo nesciunt, minus, placeat omnis eius deserunt ab. Numquam voluptatem, nisi ea eveniet earum cupiditate!</p>
      <button>Yay!</button>
      <label htmlFor="text">
        <p>Input label</p>
        <input type="text" name="text" id="text" placeholder="Enter any text" />
      </label>
    </main>
  );
}
