import { HomePage } from "@/pages";
import { ROUTE_ENUM } from "@/shared/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Providers } from "../providers";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Providers />}>
          <Route path={ROUTE_ENUM.Home} element={<HomePage />} />
          <Route
            path={ROUTE_ENUM.Tournament}
            element={
              <section>
                <div className="container">
                  <h1>Турнир</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                </div>
              </section>
            }
          />
          <Route
            path={ROUTE_ENUM.Transfers}
            element={
              <section>
                <div className="container">
                  <h1>Трансферы</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                </div>
              </section>
            }
          />
          <Route
            path={ROUTE_ENUM.Profile}
            element={
              <section>
                <div className="container">
                  <h1>Профиль</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem magnam maxime aliquam eligendi earum nemo,
                    incidunt blanditiis dolores ea, dignissimos quidem. Eos
                    architecto laudantium quaerat nemo cum consequatur quo odit?
                  </p>
                </div>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
