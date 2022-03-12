import { useState, useReducer, useEffect } from "react";
import styles from "./styles/Parts.module.css";
import ModalContainer from "./ModalContainer";
import AddPartsModal from "./AddPartsModal";
import DeletePartsModal from "./DeletePartsModal";
import FilterPartsModal from "./FilterPartsModal";
import EditPartsModal from "./EditPartsModal";
import SearchFilterAdd from "./SearchFilterAdd";
import Table from "./Table";
import searchReducer, { defaultState } from "../reducers/searchReducer";
import partsServices from "../services/partsServices";
import useSearch from "../custom-hooks/useSearch";
import usePartFilter from "../custom-hooks/usePartFilter";
import useFilterHandler from "../custom-hooks/useFilterHandler";

function Parts() {
  const [rows, setRows] = useState([]);
  const [searchState, dispatch] = useReducer(searchReducer, defaultState);
  const [categories, setCategories] = usePartFilter(
    partsServices.getCategories
  );
  const [statuses, setStatuses] = usePartFilter(partsServices.getStatuses);
  const [locations, setLocations] = usePartFilter(partsServices.getLocations);
  const handleFilter = useFilterHandler(
    setCategories,
    setStatuses,
    setLocations
  );
  const filteredRowsMemo = useSearch(
    searchState,
    rows,
    categories,
    locations,
    statuses
  );

  // Handle displaying and hiding add part modal
  const [showAddModal, setShowAddModal] = useState(false);
  const toggleAddModal = () => setShowAddModal((cur) => !cur);

  // Handle displaying and hiding filter modal
  const [showFilterModal, setShowFilterModal] = useState(false);
  const toggleFilterModal = () => setShowFilterModal((cur) => !cur);

  // Handle displaying and hiding delete part modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteModal = () => setShowDeleteModal((cur) => !cur);

  // Handle displaying and hiding edit part modal
  const [showEditModal, setShowEditModal] = useState(false);
  const toggleEditModal = () => setShowEditModal((cur) => !cur);

  // Fetch all parts
  useEffect(() => {
    partsServices
      .getParts()
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.container}>
      {showAddModal && (
        <ModalContainer>
          <AddPartsModal toggleModal={toggleAddModal} />
        </ModalContainer>
      )}
      {showDeleteModal && (
        <ModalContainer>
          <DeletePartsModal toggleModal={toggleDeleteModal} />
        </ModalContainer>
      )}
      {showFilterModal && (
        <ModalContainer>
          <FilterPartsModal
            toggleModal={toggleFilterModal}
            categories={categories}
            locations={locations}
            handleFilter={handleFilter}
            statuses={statuses}
          />
        </ModalContainer>
      )}
      {showEditModal && (
        <ModalContainer>
          <EditPartsModal
            toggleModal={toggleEditModal}
            locations={locations}
            statuses={statuses}
          />
        </ModalContainer>
      )}
      <h1 className={styles.mainHeading}>inventory</h1>
      <SearchFilterAdd
        toggleAddModal={toggleAddModal}
        toggleFilterModal={toggleFilterModal}
        dispatch={dispatch}
        searchState={searchState}
      />
      <Table
        rows={filteredRowsMemo}
        toggleDeleteModal={toggleDeleteModal}
        toggleEditModal={toggleEditModal}
      />
    </section>
  );
}

export default Parts;
