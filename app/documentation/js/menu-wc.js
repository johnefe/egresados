'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">@coreui/coreui-free-angular-admin-template documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' : 'data-target="#xs-components-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' : 'id="xs-components-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DefaultLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/P404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">P404Component</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/P500Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">P500Component</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' : 'data-target="#xs-injectables-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' : 'id="xs-injectables-links-module-AppModule-60098a1fc2f7fa8f83a41f8b70541f04"' }>
                                        <li class="link">
                                            <a href="injectables/HojaVidaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>HojaVidaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ValidacionFormularioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ValidacionFormularioService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BaseModule.html" data-type="entity-link">BaseModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-BaseModule-b79bf17f440a0cd8b056ca888f2f4efd"' : 'data-target="#xs-components-links-module-BaseModule-b79bf17f440a0cd8b056ca888f2f4efd"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-BaseModule-b79bf17f440a0cd8b056ca888f2f4efd"' : 'id="xs-components-links-module-BaseModule-b79bf17f440a0cd8b056ca888f2f4efd"' }>
                                        <li class="link">
                                            <a href="components/CardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CarouselsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CollapsesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaginationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PopoversComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopoversComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SwitchesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SwitchesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TooltipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/BaseRoutingModule.html" data-type="entity-link">BaseRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ButtonsModule.html" data-type="entity-link">ButtonsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ButtonsModule-5f37d698560d87e45676d149f9e01792"' : 'data-target="#xs-components-links-module-ButtonsModule-5f37d698560d87e45676d149f9e01792"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ButtonsModule-5f37d698560d87e45676d149f9e01792"' : 'id="xs-components-links-module-ButtonsModule-5f37d698560d87e45676d149f9e01792"' }>
                                        <li class="link">
                                            <a href="components/BrandButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BrandButtonsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DropdownsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ButtonsRoutingModule.html" data-type="entity-link">ButtonsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ChartJSModule.html" data-type="entity-link">ChartJSModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ChartJSModule-0470dfb3c343251f8b0820b7d94f94a7"' : 'data-target="#xs-components-links-module-ChartJSModule-0470dfb3c343251f8b0820b7d94f94a7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ChartJSModule-0470dfb3c343251f8b0820b7d94f94a7"' : 'id="xs-components-links-module-ChartJSModule-0470dfb3c343251f8b0820b7d94f94a7"' }>
                                        <li class="link">
                                            <a href="components/ChartJSComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartJSComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ChartJSRoutingModule.html" data-type="entity-link">ChartJSRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ConvocatoriasModule.html" data-type="entity-link">ConvocatoriasModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ConvocatoriasRoutingModule.html" data-type="entity-link">ConvocatoriasRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DashboardModule-7afb85a0bc01b12b3c66d0418296fa22"' : 'data-target="#xs-components-links-module-DashboardModule-7afb85a0bc01b12b3c66d0418296fa22"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DashboardModule-7afb85a0bc01b12b3c66d0418296fa22"' : 'id="xs-components-links-module-DashboardModule-7afb85a0bc01b12b3c66d0418296fa22"' }>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DirectiveModule.html" data-type="entity-link">DirectiveModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DirectiveModule-f9f4922ef6ac3d8108b2a671be9593aa"' : 'data-target="#xs-directives-links-module-DirectiveModule-f9f4922ef6ac3d8108b2a671be9593aa"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DirectiveModule-f9f4922ef6ac3d8108b2a671be9593aa"' : 'id="xs-directives-links-module-DirectiveModule-f9f4922ef6ac3d8108b2a671be9593aa"' }>
                                        <li class="link">
                                            <a href="directives/NumberOnlyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberOnlyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UppercaseDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UppercaseDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/EvaluacionCuposModule.html" data-type="entity-link">EvaluacionCuposModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-EvaluacionCuposModule-b3b613945d4d4b3a84fdbf4dea04e76c"' : 'data-target="#xs-components-links-module-EvaluacionCuposModule-b3b613945d4d4b3a84fdbf4dea04e76c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-EvaluacionCuposModule-b3b613945d4d4b3a84fdbf4dea04e76c"' : 'id="xs-components-links-module-EvaluacionCuposModule-b3b613945d4d4b3a84fdbf4dea04e76c"' }>
                                        <li class="link">
                                            <a href="components/ListadoAspirantesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListadoAspirantesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListadoCuposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListadoCuposComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HojaDeVidaModule.html" data-type="entity-link">HojaDeVidaModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HojaDeVidaModule-4d6c556efd14f70a1451e038df26a384"' : 'data-target="#xs-components-links-module-HojaDeVidaModule-4d6c556efd14f70a1451e038df26a384"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HojaDeVidaModule-4d6c556efd14f70a1451e038df26a384"' : 'id="xs-components-links-module-HojaDeVidaModule-4d6c556efd14f70a1451e038df26a384"' }>
                                        <li class="link">
                                            <a href="components/ExperienciaLaboralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienciaLaboralComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormacionAcademicaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormacionAcademicaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NucleoFamiliarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NucleoFamiliarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PersonaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonaComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HojaDeVidaRoutingModule.html" data-type="entity-link">HojaDeVidaRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/IconsModule.html" data-type="entity-link">IconsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-IconsModule-45603fe89bbf5e01bef23fc10601921a"' : 'data-target="#xs-components-links-module-IconsModule-45603fe89bbf5e01bef23fc10601921a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-IconsModule-45603fe89bbf5e01bef23fc10601921a"' : 'id="xs-components-links-module-IconsModule-45603fe89bbf5e01bef23fc10601921a"' }>
                                        <li class="link">
                                            <a href="components/CoreUIIconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreUIIconsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FlagsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlagsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FontAwesomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FontAwesomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SimpleLineIconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleLineIconsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/IconsRoutingModule.html" data-type="entity-link">IconsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-5d98ddd01693cc92eb2107d9ea6dab26"' : 'data-target="#xs-components-links-module-LoginModule-5d98ddd01693cc92eb2107d9ea6dab26"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-5d98ddd01693cc92eb2107d9ea6dab26"' : 'id="xs-components-links-module-LoginModule-5d98ddd01693cc92eb2107d9ea6dab26"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistroComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NotificationsModule-e79c43561821281a87980c109764bcc5"' : 'data-target="#xs-components-links-module-NotificationsModule-e79c43561821281a87980c109764bcc5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NotificationsModule-e79c43561821281a87980c109764bcc5"' : 'id="xs-components-links-module-NotificationsModule-e79c43561821281a87980c109764bcc5"' }>
                                        <li class="link">
                                            <a href="components/AlertsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BadgesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BadgesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ModalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NotificationsRoutingModule.html" data-type="entity-link">NotificationsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PruebasModule.html" data-type="entity-link">PruebasModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PruebasModule-86043088560abb084282d923b5275a44"' : 'data-target="#xs-components-links-module-PruebasModule-86043088560abb084282d923b5275a44"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PruebasModule-86043088560abb084282d923b5275a44"' : 'id="xs-components-links-module-PruebasModule-86043088560abb084282d923b5275a44"' }>
                                        <li class="link">
                                            <a href="components/PruebasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PruebasComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ServicesModule-a2aad1794ff1d644436618a11c85e6bd"' : 'data-target="#xs-injectables-links-module-ServicesModule-a2aad1794ff1d644436618a11c85e6bd"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-a2aad1794ff1d644436618a11c85e6bd"' : 'id="xs-injectables-links-module-ServicesModule-a2aad1794ff1d644436618a11c85e6bd"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatosSessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DatosSessionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EvaluacionCuposService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>EvaluacionCuposService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelpersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>HelpersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InscrAspiranteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>InscrAspiranteService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MensajeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MensajeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PruebaAdmisionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PruebaAdmisionService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SolicitudPersonalModule.html" data-type="entity-link">SolicitudPersonalModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SolicitudPersonalModule-918e25ff6a954134570edf96c5cd863f"' : 'data-target="#xs-components-links-module-SolicitudPersonalModule-918e25ff6a954134570edf96c5cd863f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SolicitudPersonalModule-918e25ff6a954134570edf96c5cd863f"' : 'id="xs-components-links-module-SolicitudPersonalModule-918e25ff6a954134570edf96c5cd863f"' }>
                                        <li class="link">
                                            <a href="components/PersonalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SolicitudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SolicitudComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SolicitudPersonalRoutingModule.html" data-type="entity-link">SolicitudPersonalRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ThemeModule.html" data-type="entity-link">ThemeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ThemeModule-166549a2a52ac1220f6c0ee3ba9a0def"' : 'data-target="#xs-components-links-module-ThemeModule-166549a2a52ac1220f6c0ee3ba9a0def"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ThemeModule-166549a2a52ac1220f6c0ee3ba9a0def"' : 'id="xs-components-links-module-ThemeModule-166549a2a52ac1220f6c0ee3ba9a0def"' }>
                                        <li class="link">
                                            <a href="components/ColorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TypographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypographyComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ThemeRoutingModule.html" data-type="entity-link">ThemeRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UsuarioModule.html" data-type="entity-link">UsuarioModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UsuarioRoutingModule.html" data-type="entity-link">UsuarioRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ViewsModule-8cb87f008b5bc70ea57f65e11bd1a539"' : 'data-target="#xs-components-links-module-ViewsModule-8cb87f008b5bc70ea57f65e11bd1a539"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ViewsModule-8cb87f008b5bc70ea57f65e11bd1a539"' : 'id="xs-components-links-module-ViewsModule-8cb87f008b5bc70ea57f65e11bd1a539"' }>
                                        <li class="link">
                                            <a href="components/ProcesoArchivoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcesoArchivoComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WidgetsModule.html" data-type="entity-link">WidgetsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WidgetsModule-38fe9733951ed3025a191c227bcb6bb7"' : 'data-target="#xs-components-links-module-WidgetsModule-38fe9733951ed3025a191c227bcb6bb7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WidgetsModule-38fe9733951ed3025a191c227bcb6bb7"' : 'id="xs-components-links-module-WidgetsModule-38fe9733951ed3025a191c227bcb6bb7"' }>
                                        <li class="link">
                                            <a href="components/WidgetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WidgetsRoutingModule.html" data-type="entity-link">WidgetsRoutingModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LoginComponent-1.html" data-type="entity-link">LoginComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/ServiceBase.html" data-type="entity-link">ServiceBase</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DatosSessionService.html" data-type="entity-link">DatosSessionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EvaluacionCuposService.html" data-type="entity-link">EvaluacionCuposService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/HelpersService.html" data-type="entity-link">HelpersService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/HojaVidaService.html" data-type="entity-link">HojaVidaService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InscrAspiranteService.html" data-type="entity-link">InscrAspiranteService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MensajeService.html" data-type="entity-link">MensajeService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PruebaAdmisionService.html" data-type="entity-link">PruebaAdmisionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ValidacionFormularioService.html" data-type="entity-link">ValidacionFormularioService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/LoginGuardService.html" data-type="entity-link">LoginGuardService</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
