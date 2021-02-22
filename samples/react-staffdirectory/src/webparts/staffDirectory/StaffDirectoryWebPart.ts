import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneHorizontalRule
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, PropertyPaneLabel } from '@microsoft/sp-webpart-base';

import * as strings from 'StaffDirectoryWebPartStrings';
import {StaffDirectory}  from '../../components/StaffDirectory/StaffDirectory';
import { IStaffDirectoryProps } from '../../components/StaffDirectory/IStaffDirectoryProps';
import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';

import { ThemeProvider, ThemeChangedEventArgs, IReadonlyTheme } from '@microsoft/sp-component-base';
export interface IStaffDirectoryWebPartProps {
  title: string;
  maxHeight: number;
  showBox: boolean;
  displayMode: DisplayMode;
  refreshInterval: number;
  updateProperty: (value: string) => void;
  updatePresenceStatus: boolean;
  userAttributes: string[];
  pageSize:number;
}

export default class StaffDirectoryWebPart extends BaseClientSideWebPart<IStaffDirectoryWebPartProps> {

  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;
  protected async onInit(): Promise<void> {
    window.sessionStorage.clear();
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
    // If it exists, get the theme variant
    this._themeVariant = this._themeProvider.tryGetTheme();

    // Register a handler to be notified if the theme variant changes
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
    return Promise.resolve();
  }

  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._themeVariant = args.theme;

    this.render();
  }


  public render(): void {
    const element: React.ReactElement<IStaffDirectoryProps> = React.createElement(
      StaffDirectory,
      {
        title: this.properties.title,
        context: this.context,
        maxHeight: this.properties.maxHeight,
        showBox: this.properties.showBox,
        themeVariant: this._themeVariant,
        displayMode: this.displayMode,
        updateProperty:   (value:string ) => {
            this.properties.title =  value;
        },
        refreshInterval: this.properties.refreshInterval,
        updatePresenceStatus: this.properties.updatePresenceStatus,
        userAttributes: this.properties.userAttributes,
        pageSize: this.properties.pageSize,
      }
    );

    ReactDom.render(element, this.domElement);
  }

 protected get disableReactivePropertyChanges() {
  return true;
 }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel,
                  value: this.properties.title
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneSlider("maxHeight",{
                  min: 280,
                  max: 1200,
                  value: this.properties.maxHeight,
                  label: strings.MaxHeightLabel
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneToggle("showBox",{
                  label: strings.ShowBoxLabel,
                  key:"showBox",
                  checked: this.properties.showBox
                }),
                PropertyPaneToggle("updatePresenceStatus",{
                  label: strings.UpdatePresenceStatusLabel,
                  key:"presenceStatus",
                  checked: this.properties.updatePresenceStatus
                }),

                PropertyPaneHorizontalRule(),

                  this.properties.updatePresenceStatus && (
                    PropertyPaneSlider("refreshInterval",{
                      min: 3,
                      max: 15,
                      value: this.properties.refreshInterval,
                      label: strings.RefreshIntervalLabel
                    })
                  ),
                  PropertyPaneLabel('',{text:''}),
                  PropertyPaneHorizontalRule(),

                  PropertyFieldMultiSelect('userAttributes', {
                    key: 'userAttributes',
                    label: strings.UserAttributesLabel,

                    options: [
                      {
                        key: "company",
                        text: "Company"
                      },
                      {
                        key: "officeLocation",
                        text: "Office Location"
                      },
                      {
                        key: "mobilePhone",
                        text: "Mobile Phone",
                      },
                      {
                        key: "postalCode",
                        text: "Postal Code"
                      },
                      {
                        key: "country",
                        text: "Country"
                      },
                      {
                        key: "employeeId",
                        text: "Employee Id"
                      },
                      {
                        key: "imAddresses",
                        text: "IMS Address"
                      },
                      {
                        key: "userType",
                        text: "User Type"
                      },
                    ],
                    selectedKeys: this.properties.userAttributes
                  }),
                  PropertyPaneLabel('',{text:''}),
                  PropertyPaneHorizontalRule(),
                  PropertyPaneSlider("pageSize",{
                    min: 5,
                    max: 100,
                    value: this.properties.pageSize,
                    label: strings.PageSizeLabel
                  }),
              ]
            }
          ]
        }
      ]
    };
  }
}
