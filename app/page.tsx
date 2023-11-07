export default function Home() {
  return (
    <div className="container ">
      <div>
        <h2>Server Actions</h2>
        <ul>
          <li>
            <a href="/1-all-server-components">1-all-server-components</a>
          </li>
          <li>
            <a href="/2-with-client-component">2-with-client-component</a>
          </li>
          <li>
            <a href="/3-with-client-component-pending">
              3-with-client-component-pending
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/11-all-client-component-get">
              11-all-client-component-get
            </a>
          </li>
          <li>
            <a href="/12-all-client-component-single-loading-state-plus-sort">
              12-all-client-component-single-loading-state-plus-sort
            </a>
          </li>{" "}
          <li>
            <a href="/13-all-client-component-suspense-use-hook">
              13-all-client-component-suspense-use-hook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
