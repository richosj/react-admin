import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Account:React.FC = () => {
    return (
        <div className="wrapper">
            <div className="leftside-menu">
                <Link href={'/account'} className='logo'><img src="https://all4land.com/renewal_img/common/logo.png" alt="logo" /></Link>
                <div id='leftside-menu-cotanienr'>
                    <nav className="side-nav">
                        <ul>
                            <li className="side-nav-item"><Link href={'/account'} className='side-nav-link'><span>회원 관리</span></Link>
                                <div className="side-nav-third" id='sidebar-01'>
                                    <ul>
                                        <li><Link href={'/account'}>회원 조회</Link></li>
                                        <li><Link href={'/account'}>회원 정보 수정</Link></li>
                                        <li><Link href={'/account'}>기관(기업) 관리</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item"><Link href={'/account'} className='side-nav-link'><span>권한 관리</span></Link>
                                <div className="side-nav-third" id='sidebar-02'>
                                    <ul>
                                        <li><Link href={'/account'}>사용자 권한 관리</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item"><Link href={'/account'} className='side-nav-link'><span>결제 관리</span></Link>
                                <div className="side-nav-third" id='sidebar-03'>
                                    <ul>
                                        <li><Link href={'/account'}>제품 관리</Link></li>
                                        <li><Link href={'/account'}>제품 결제 관리</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item"><Link href={'/account'} className='side-nav-link'><span>고객 지원 관리</span></Link>
                                <div className="side-nav-third" id='sidebar-04'>
                                    <ul>
                                        <li><Link href={'/account'}>공지사항 관리</Link></li>
                                        <li><Link href={'/account'}>FAQ 관리</Link></li>
                                        <li><Link href={'/account'}>문의 내역 관리</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item"><Link href={'/account'} className='side-nav-link'><span>사용 현황 관리</span></Link>
                                <div className="side-nav-third" id='sidebar-05'>
                                    <ul>
                                        <li><Link href={'/account'}>접속 현황</Link></li>
                                        <li><Link href={'/account'}>서비스 사용 현황</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* leftside-menu */}
            <div className='content-page'>
                <nav className="navbar navbar-custom">
                    <div className='d-flex align-items-center'>
                        <span><b>홍길동</b>님 반갑다.</span>
                        <button type='button' className='btn btn-primary'>로그아웃</button>
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12"><h2 className='page-title'>ㅇㅇ</h2></div>
                        </div>
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <form className="row mb-3 gy-2 d-flex">
                                        <div className="col-xl-2">
                                            <select className="form-select">
                                                <option value="">하하</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className='input-group'>
                                                <input type="text" className='form-control' />
                                                <div className="input-group-append"><button className="btn btn-outline-secondary" type="button">검색</button></div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="display-count mb-1">
                                        Total : 9,999
                                    </div>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <th className='text-center'>카테</th>
                                            <th className='text-center'>카테</th>
                                            <th className='text-center'>카테</th>
                                            <th className='text-center'>카테</th>
                                            <th className='text-center'>카테</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                            </tr>
                                            <tr>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                                <td>내용</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* paging */}
                                    <nav className='d-flex justify-content-center'>
                                        <ul className='pagination'>
                                            <li className="page-item"><Link href={'/account'} className='page-link'>Prev</Link></li>
                                            <li className="page-item"><Link href={'/account'} className='page-link'>1</Link></li>
                                            <li className="page-item"><Link href={'/account'} className='page-link'>2</Link></li>
                                            <li className="page-item"><Link href={'/account'} className='page-link'>3</Link></li>
                                            <li className="page-item"><Link href={'/account'} className='page-link'>Next</Link></li>
                                        </ul>
                                    </nav>
                                    {/* paging */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content-page */}
        </div>
    )
}

export default Account;