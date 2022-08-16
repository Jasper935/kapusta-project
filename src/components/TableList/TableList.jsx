import s from './TableList.module.css';

import 'react-datepicker/dist/react-datepicker.css';

const Tablelist = () => {
  return (
    <>
      <div className={s.table_container}>
        <div className={s.table_wrapper}>
          <table classname={s.table}>
            <thead className={s.table_thead}>
              <tr>
                <th className={s.table_th1}>Date</th>
                <th className={s.table_th2}>Description</th>
                <th className={s.table_th3}>Category</th>
                <th className={s.table_th4}>Summ</th>
              </tr>
            </thead>
            <tbody className={s.table_tbody}>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test1</td>
                <td className={s.category_td3}>казино</td>
                <td className={s.summ_td4}>230</td>
              </tr>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test2</td>
                <td className={s.category_td3}>Рояль</td>
                <td className={s.summ_td4}>400</td>
              </tr>
              <tr>
                <td className={s.date_td1}>05.09.2019</td>
                <td className={s.description_td2}>test3</td>
                <td className={s.category_td3}>Зп</td>
                <td className={s.summ_td4}>23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.summary_wrapper}></div>
      </div>
    </>
  );
};

export default Tablelist;
