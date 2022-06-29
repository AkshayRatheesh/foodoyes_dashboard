function sidebar() {
    let side=document.querySelector(".sidebar");
    side.innerHTML=`
    <div class="left side-menu">
                <div class="slimscroll-menu" id="remove-scroll">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu" id="side-menu">
                            <li class="menu-title">Main</li>
                            <li>
                                <a href="index.html" class="waves-effect">
                                    <i class="mdi mdi-home"></i><span class="badge badge-primary float-right">3</span> <span> Dashboard </span>
                                </a>
                            </li>

                            <li>
                                <a href="order.html" class="waves-effect"><i class="mdi mdi-email"></i><span> Orders <span class="float-right menu-arrow"></span> </span></a>
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa-thin fa-plate-utensils"></i> <span> Our Menu<span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span> </span> </a>
                                
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-black-mesa"></i> <span> Food Time <span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span> </span> </a>
                                
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-table-settings"></i><span> Delivery Charge & Distance  <span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span> </span></a>

                                
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-finance"></i><span> Time Slot <span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span> </span></a>
                                
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-clipboard"></i><span>  Notification<span class="badge badge-success float-right">6</span> </span></a>
                                
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-album"></i> <span> Report  <span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span></span> </a>
                                
                            </li>

                            <li>
                                <a href="calendar.html" class="waves-effect"><i class="mdi mdi-calendar-check"></i><span> Add Offers </span></a>
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-google-maps"></i><span> Top selling  <span class="float-right menu-arrow"><i class="mdi mdi-plus"></i></span></span></a>
                                
                            </li>
                        </ul>

                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
    
    `;
}
sidebar();