// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        dfareporting(version: string): any;
        dfareporting(version: 'v2.0'): dfareporting.v2_0.Dfareporting;
    }

    namespace dfareporting {
        namespace v2_0 {
            export interface Dfareporting {
                new(options: any): Dfareporting;

                'accountActiveAdSummaries': {
                    'get': (parameters: {'profileId': string, 'summaryAccountId': string}, callback: (error: any, body: AccountActiveAdSummary, response: any) => void) => Request;
                };
                'accountPermissionGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountPermissionGroup, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: AccountPermissionGroupsListResponse, response: any) => void) => Request;
                };
                'accountPermissions': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountPermission, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: AccountPermissionsListResponse, response: any) => void) => Request;
                };
                'accountUserProfiles': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string, 'userRoleId'?: string}, callback: (error: any, body: AccountUserProfilesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: AccountUserProfile, response: any) => void) => Request;
                };
                'accounts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: AccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Account, response: any) => void) => Request;
                };
                'ads': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId'?: string, 'archived'?: boolean, 'audienceSegmentIds'?: string, 'campaignIds'?: string, 'compatibility'?: string, 'creativeIds'?: string, 'creativeOptimizationConfigurationIds'?: string, 'creativeType'?: string, 'dynamicClickTracker'?: boolean, 'ids'?: string, 'landingPageIds'?: string, 'maxResults'?: number, 'overriddenEventTagId'?: string, 'pageToken'?: string, 'placementIds'?: string, 'profileId': string, 'remarketingListIds'?: string, 'searchString'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string, 'sslCompliant'?: boolean, 'sslRequired'?: boolean, 'type'?: string}, callback: (error: any, body: AdsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Ad, response: any) => void) => Request;
                };
                'advertiserGroups': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: AdvertiserGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: AdvertiserGroup, response: any) => void) => Request;
                };
                'advertisers': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'list': (parameters: {'advertiserGroupIds'?: string, 'floodlightConfigurationIds'?: string, 'ids'?: string, 'includeAdvertisersWithoutGroupsOnly'?: boolean, 'maxResults'?: number, 'onlyParent'?: boolean, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'status'?: string, 'subaccountId'?: string}, callback: (error: any, body: AdvertisersListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Advertiser, response: any) => void) => Request;
                };
                'browsers': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: BrowsersListResponse, response: any) => void) => Request;
                };
                'campaignCreativeAssociations': {
                    'insert': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: CampaignCreativeAssociation, response: any) => void) => Request;
                    'list': (parameters: {'campaignId': string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'sortOrder'?: string}, callback: (error: any, body: CampaignCreativeAssociationsListResponse, response: any) => void) => Request;
                };
                'campaigns': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'insert': (parameters: {'defaultLandingPageName': string, 'defaultLandingPageUrl': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'list': (parameters: {'advertiserGroupIds'?: string, 'advertiserIds'?: string, 'archived'?: boolean, 'atLeastOneOptimizationActivity'?: boolean, 'excludedIds'?: string, 'ids'?: string, 'maxResults'?: number, 'overriddenEventTagId'?: string, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string}, callback: (error: any, body: CampaignsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Campaign, response: any) => void) => Request;
                };
                'changeLogs': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ChangeLog, response: any) => void) => Request;
                    'list': (parameters: {'action'?: string, 'ids'?: string, 'maxChangeTime'?: string, 'maxResults'?: number, 'minChangeTime'?: string, 'objectIds'?: string, 'objectType'?: string, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'userProfileIds'?: string}, callback: (error: any, body: ChangeLogsListResponse, response: any) => void) => Request;
                };
                'cities': {
                    'list': (parameters: {'countryDartIds'?: string, 'dartIds'?: string, 'namePrefix'?: string, 'profileId': string, 'regionDartIds'?: string}, callback: (error: any, body: CitiesListResponse, response: any) => void) => Request;
                };
                'connectionTypes': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: ConnectionTypesListResponse, response: any) => void) => Request;
                };
                'contentCategories': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ContentCategoriesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: ContentCategory, response: any) => void) => Request;
                };
                'countries': {
                    'get': (parameters: {'dartId': string, 'profileId': string}, callback: (error: any, body: Country, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: CountriesListResponse, response: any) => void) => Request;
                };
                'creativeAssets': {
                    'insert': (parameters: {'advertiserId': string, 'profileId': string}, callback: (error: any, body: CreativeAssetMetadata, response: any) => void) => Request;
                };
                'creativeFieldValues': {
                    'delete': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'insert': (parameters: {'creativeFieldId': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'list': (parameters: {'creativeFieldId': string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeFieldValuesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'creativeFieldId': string, 'id': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                    'update': (parameters: {'creativeFieldId': string, 'profileId': string}, callback: (error: any, body: CreativeFieldValue, response: any) => void) => Request;
                };
                'creativeFields': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeFieldsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: CreativeField, response: any) => void) => Request;
                };
                'creativeGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'groupNumber'?: number, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: CreativeGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: CreativeGroup, response: any) => void) => Request;
                };
                'creatives': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'list': (parameters: {'active'?: boolean, 'advertiserId'?: string, 'archived'?: boolean, 'campaignId'?: string, 'companionCreativeIds'?: string, 'creativeFieldIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'renderingIds'?: string, 'searchString'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string, 'studioCreativeId'?: string, 'types'?: string}, callback: (error: any, body: CreativesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Creative, response: any) => void) => Request;
                };
                'dimensionValues': {
                    'query': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string}, callback: (error: any, body: DimensionValueList, response: any) => void) => Request;
                };
                'directorySiteContacts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: DirectorySiteContact, response: any) => void) => Request;
                    'list': (parameters: {'directorySiteIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: DirectorySiteContactsListResponse, response: any) => void) => Request;
                };
                'directorySites': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: DirectorySite, response: any) => void) => Request;
                    'list': (parameters: {'acceptsInStreamVideoPlacements'?: boolean, 'acceptsInterstitialPlacements'?: boolean, 'acceptsPublisherPaidPlacements'?: boolean, 'active'?: boolean, 'countryId'?: string, 'dfp_network_code'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'parentId'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: DirectorySitesListResponse, response: any) => void) => Request;
                };
                'eventTags': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'list': (parameters: {'adId'?: string, 'advertiserId'?: string, 'campaignId'?: string, 'definitionsOnly'?: boolean, 'enabled'?: boolean, 'eventTagTypes'?: string, 'ids'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: EventTagsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: EventTag, response: any) => void) => Request;
                };
                'files': {
                    'get': (parameters: {'fileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                };
                'floodlightActivities': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'generatetag': (parameters: {'floodlightActivityId'?: string, 'profileId': string}, callback: (error: any, body: FloodlightActivitiesGenerateTagResponse, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'list': (parameters: {'advertiserId'?: string, 'floodlightActivityGroupIds'?: string, 'floodlightActivityGroupName'?: string, 'floodlightActivityGroupTagString'?: string, 'floodlightActivityGroupType'?: string, 'floodlightConfigurationId'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'tagString'?: string}, callback: (error: any, body: FloodlightActivitiesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivity, response: any) => void) => Request;
                };
                'floodlightActivityGroups': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserId'?: string, 'floodlightConfigurationId'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'type'?: string}, callback: (error: any, body: FloodlightActivityGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightActivityGroup, response: any) => void) => Request;
                };
                'floodlightConfigurations': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'profileId': string}, callback: (error: any, body: FloodlightConfigurationsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: FloodlightConfiguration, response: any) => void) => Request;
                };
                'landingPages': {
                    'delete': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'insert': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'list': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPagesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'campaignId': string, 'id': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                    'update': (parameters: {'campaignId': string, 'profileId': string}, callback: (error: any, body: LandingPage, response: any) => void) => Request;
                };
                'metros': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: MetrosListResponse, response: any) => void) => Request;
                };
                'mobileCarriers': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: MobileCarriersListResponse, response: any) => void) => Request;
                };
                'operatingSystemVersions': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: OperatingSystemVersionsListResponse, response: any) => void) => Request;
                };
                'operatingSystems': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: OperatingSystemsListResponse, response: any) => void) => Request;
                };
                'placementGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'archived'?: boolean, 'campaignIds'?: string, 'contentCategoryIds'?: string, 'directorySiteIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'placementGroupType'?: string, 'placementStrategyIds'?: string, 'pricingTypes'?: string, 'profileId': string, 'searchString'?: string, 'siteIds'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementGroupsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: PlacementGroup, response: any) => void) => Request;
                };
                'placementStrategies': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementStrategiesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: PlacementStrategy, response: any) => void) => Request;
                };
                'placements': {
                    'generatetags': (parameters: {'campaignId'?: string, 'placementIds'?: string, 'profileId': string, 'tagFormats'?: string}, callback: (error: any, body: PlacementsGenerateTagsResponse, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'list': (parameters: {'advertiserIds'?: string, 'archived'?: boolean, 'campaignIds'?: string, 'compatibilities'?: string, 'contentCategoryIds'?: string, 'directorySiteIds'?: string, 'groupIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'paymentSource'?: string, 'placementStrategyIds'?: string, 'pricingTypes'?: string, 'profileId': string, 'searchString'?: string, 'siteIds'?: string, 'sizeIds'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: PlacementsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Placement, response: any) => void) => Request;
                };
                'platformTypes': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: PlatformTypesListResponse, response: any) => void) => Request;
                };
                'postalCodes': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: PostalCodesListResponse, response: any) => void) => Request;
                };
                'regions': {
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: RegionsListResponse, response: any) => void) => Request;
                };
                'reports': {
                    'delete': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'scope'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: ReportList, response: any) => void) => Request;
                    'patch': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                    'run': (parameters: {'profileId': string, 'reportId': string, 'synchronous'?: boolean}, callback: (error: any, body: File, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string, 'reportId': string}, callback: (error: any, body: Report, response: any) => void) => Request;
                
                    'compatibleFields': {
                        'query': (parameters: {'profileId': string}, callback: (error: any, body: CompatibleFields, response: any) => void) => Request;
                    };
                    'files': {
                        'get': (parameters: {'fileId': string, 'profileId': string, 'reportId': string}, callback: (error: any, body: File, response: any) => void) => Request;
                        'list': (parameters: {'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'reportId': string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: FileList, response: any) => void) => Request;
                    };
                };
                'sites': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'list': (parameters: {'acceptsInStreamVideoPlacements'?: boolean, 'acceptsInterstitialPlacements'?: boolean, 'acceptsPublisherPaidPlacements'?: boolean, 'adWordsSite'?: boolean, 'approved'?: boolean, 'campaignIds'?: string, 'directorySiteIds'?: string, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string, 'unmappedSite'?: boolean}, callback: (error: any, body: SitesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Site, response: any) => void) => Request;
                };
                'sizes': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Size, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Size, response: any) => void) => Request;
                    'list': (parameters: {'height'?: number, 'iabStandard'?: boolean, 'ids'?: string, 'profileId': string, 'width'?: number}, callback: (error: any, body: SizesListResponse, response: any) => void) => Request;
                };
                'subaccounts': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string}, callback: (error: any, body: SubaccountsListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: Subaccount, response: any) => void) => Request;
                };
                'userProfiles': {
                    'get': (parameters: {'profileId': string}, callback: (error: any, body: UserProfile, response: any) => void) => Request;
                    'list': (parameters: any, callback: (error: any, body: UserProfileList, response: any) => void) => Request;
                };
                'userRolePermissionGroups': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRolePermissionGroup, response: any) => void) => Request;
                    'list': (parameters: {'profileId': string}, callback: (error: any, body: UserRolePermissionGroupsListResponse, response: any) => void) => Request;
                };
                'userRolePermissions': {
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRolePermission, response: any) => void) => Request;
                    'list': (parameters: {'ids'?: string, 'profileId': string}, callback: (error: any, body: UserRolePermissionsListResponse, response: any) => void) => Request;
                };
                'userRoles': {
                    'delete': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: any, response: any) => void) => Request;
                    'get': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'insert': (parameters: {'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'list': (parameters: {'accountUserRoleOnly'?: boolean, 'ids'?: string, 'maxResults'?: number, 'pageToken'?: string, 'profileId': string, 'searchString'?: string, 'sortField'?: string, 'sortOrder'?: string, 'subaccountId'?: string}, callback: (error: any, body: UserRolesListResponse, response: any) => void) => Request;
                    'patch': (parameters: {'id': string, 'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                    'update': (parameters: {'profileId': string}, callback: (error: any, body: UserRole, response: any) => void) => Request;
                };

            }

            export interface Account {
                'accountPermissionIds': string[];
                'accountProfile': string;
                'active': boolean;
                'activeAdsLimitTier': string;
                'activeViewOptOut': boolean;
                'availablePermissionIds': string[];
                'comscoreVceEnabled': boolean;
                'countryId': string;
                'currencyId': string;
                'defaultCreativeSizeId': string;
                'description': string;
                'id': string;
                'kind': string;
                'locale': string;
                'maximumImageSize': string;
                'name': string;
                'nielsenOcrEnabled': boolean;
                'reportsConfiguration': ReportsConfiguration;
                'teaserSizeLimit': string;
            }

            export interface AccountActiveAdSummary {
                'accountId': string;
                'activeAds': string;
                'activeAdsLimitTier': string;
                'availableAds': string;
                'kind': string;
            }

            export interface AccountPermission {
                'accountProfiles': string[];
                'id': string;
                'kind': string;
                'level': string;
                'name': string;
                'permissionGroupId': string;
            }

            export interface AccountPermissionGroup {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface AccountPermissionGroupsListResponse {
                'accountPermissionGroups': AccountPermissionGroup[];
                'kind': string;
            }

            export interface AccountPermissionsListResponse {
                'accountPermissions': AccountPermission[];
                'kind': string;
            }

            export interface AccountUserProfile {
                'accountId': string;
                'active': boolean;
                'advertiserFilter': ObjectFilter;
                'campaignFilter': ObjectFilter;
                'comments': string;
                'email': string;
                'id': string;
                'kind': string;
                'locale': string;
                'name': string;
                'siteFilter': ObjectFilter;
                'subaccountId': string;
                'traffickerType': string;
                'userAccessType': string;
                'userRoleFilter': ObjectFilter;
                'userRoleId': string;
            }

            export interface AccountUserProfilesListResponse {
                'accountUserProfiles': AccountUserProfile[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AccountsListResponse {
                'accounts': Account[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Activities {
                'filters': DimensionValue[];
                'kind': string;
                'metricNames': string[];
            }

            export interface Ad {
                'accountId': string;
                'active': boolean;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'audienceSegmentId': string;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'clickThroughUrl': ClickThroughUrl;
                'clickThroughUrlSuffixProperties': ClickThroughUrlSuffixProperties;
                'comments': string;
                'compatibility': string;
                'createInfo': LastModifiedInfo;
                'creativeGroupAssignments': CreativeGroupAssignment[];
                'creativeRotation': CreativeRotation;
                'dayPartTargeting': DayPartTargeting;
                'defaultClickThroughEventTagProperties': DefaultClickThroughEventTagProperties;
                'deliverySchedule': DeliverySchedule;
                'dynamicClickTracker': boolean;
                'endTime': string;
                'eventTagOverrides': EventTagOverride[];
                'geoTargeting': GeoTargeting;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyValueTargetingExpression': KeyValueTargetingExpression;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'placementAssignments': PlacementAssignment[];
                'remarketing_list_expression': ListTargetingExpression;
                'size': Size;
                'sslCompliant': boolean;
                'sslRequired': boolean;
                'startTime': string;
                'subaccountId': string;
                'technologyTargeting': TechnologyTargeting;
                'type': string;
            }

            export interface AdsListResponse {
                'ads': Ad[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface Advertiser {
                'accountId': string;
                'advertiserGroupId': string;
                'clickThroughUrlSuffix': string;
                'defaultClickThroughEventTagId': string;
                'defaultEmail': string;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'name': string;
                'status': string;
                'subaccountId': string;
            }

            export interface AdvertiserGroup {
                'accountId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface AdvertiserGroupsListResponse {
                'advertiserGroups': AdvertiserGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AdvertisersListResponse {
                'advertisers': Advertiser[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface AudienceSegment {
                'allocation': number;
                'id': string;
                'name': string;
            }

            export interface AudienceSegmentGroup {
                'audienceSegments': AudienceSegment[];
                'id': string;
                'name': string;
            }

            export interface Browser {
                'browserVersionId': string;
                'dartId': string;
                'kind': string;
                'majorVersion': string;
                'minorVersion': string;
                'name': string;
            }

            export interface BrowsersListResponse {
                'browsers': Browser[];
                'kind': string;
            }

            export interface Campaign {
                'accountId': string;
                'additionalCreativeOptimizationConfigurations': CreativeOptimizationConfiguration[];
                'advertiserGroupId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'audienceSegmentGroups': AudienceSegmentGroup[];
                'billingInvoiceCode': string;
                'clickThroughUrlSuffixProperties': ClickThroughUrlSuffixProperties;
                'comment': string;
                'comscoreVceEnabled': boolean;
                'createInfo': LastModifiedInfo;
                'creativeGroupIds': string[];
                'creativeOptimizationConfiguration': CreativeOptimizationConfiguration;
                'defaultClickThroughEventTagProperties': DefaultClickThroughEventTagProperties;
                'endDate': string;
                'eventTagOverrides': EventTagOverride[];
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'lookbackConfiguration': LookbackConfiguration;
                'name': string;
                'nielsenOcrEnabled': boolean;
                'startDate': string;
                'subaccountId': string;
                'traffickerEmails': string[];
            }

            export interface CampaignCreativeAssociation {
                'creativeId': string;
                'kind': string;
            }

            export interface CampaignCreativeAssociationsListResponse {
                'campaignCreativeAssociations': CampaignCreativeAssociation[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CampaignsListResponse {
                'campaigns': Campaign[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ChangeLog {
                'accountId': string;
                'action': string;
                'changeTime': string;
                'fieldName': string;
                'id': string;
                'kind': string;
                'newValue': string;
                'objectId': string;
                'objectType': string;
                'oldValue': string;
                'subaccountId': string;
                'transactionId': string;
                'userProfileId': string;
                'userProfileName': string;
            }

            export interface ChangeLogsListResponse {
                'changeLogs': ChangeLog[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CitiesListResponse {
                'cities': City[];
                'kind': string;
            }

            export interface City {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'kind': string;
                'metroCode': string;
                'metroDmaId': string;
                'name': string;
                'regionCode': string;
                'regionDartId': string;
            }

            export interface ClickTag {
                'eventName': string;
                'name': string;
                'value': string;
            }

            export interface ClickThroughUrl {
                'customClickThroughUrl': string;
                'defaultLandingPage': boolean;
                'landingPageId': string;
            }

            export interface ClickThroughUrlSuffixProperties {
                'clickThroughUrlSuffix': string;
                'overrideInheritedSuffix': boolean;
            }

            export interface CompanionClickThroughOverride {
                'clickThroughUrl': ClickThroughUrl;
                'creativeId': string;
            }

            export interface CompatibleFields {
                'crossDimensionReachReportCompatibleFields': CrossDimensionReachReportCompatibleFields;
                'floodlightReportCompatibleFields': FloodlightReportCompatibleFields;
                'kind': string;
                'pathToConversionReportCompatibleFields': PathToConversionReportCompatibleFields;
                'reachReportCompatibleFields': ReachReportCompatibleFields;
                'reportCompatibleFields': ReportCompatibleFields;
            }

            export interface ConnectionType {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface ConnectionTypesListResponse {
                'connectionTypes': ConnectionType[];
                'kind': string;
            }

            export interface ContentCategoriesListResponse {
                'contentCategories': ContentCategory[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ContentCategory {
                'accountId': string;
                'description': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface CountriesListResponse {
                'countries': Country[];
                'kind': string;
            }

            export interface Country {
                'countryCode': string;
                'dartId': string;
                'kind': string;
                'name': string;
                'sslEnabled': boolean;
            }

            export interface Creative {
                'accountId': string;
                'active': boolean;
                'adParameters': string;
                'adTagKeys': string[];
                'advertiserId': string;
                'allowScriptAccess': boolean;
                'archived': boolean;
                'artworkType': string;
                'authoringTool': string;
                'auto_advance_images': boolean;
                'backgroundColor': string;
                'backupImageClickThroughUrl': string;
                'backupImageFeatures': string[];
                'backupImageReportingLabel': string;
                'backupImageTargetWindow': TargetWindow;
                'clickTags': ClickTag[];
                'commercialId': string;
                'companionCreatives': string[];
                'compatibility': string[];
                'counterCustomEvents': CreativeCustomEvent[];
                'creativeAssets': CreativeAsset[];
                'creativeFieldAssignments': CreativeFieldAssignment[];
                'customKeyValues': string[];
                'exitCustomEvents': CreativeCustomEvent[];
                'fsCommand': FsCommand;
                'htmlCode': string;
                'htmlCodeLocked': boolean;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'latestTraffickedCreativeId': string;
                'name': string;
                'overrideCss': string;
                'redirectUrl': string;
                'renderingId': string;
                'renderingIdDimensionValue': DimensionValue;
                'requiredFlashPluginVersion': string;
                'requiredFlashVersion': number;
                'size': Size;
                'skippable': boolean;
                'sslCompliant': boolean;
                'studioAdvertiserId': string;
                'studioCreativeId': string;
                'studioTraffickedCreativeId': string;
                'subaccountId': string;
                'thirdPartyBackupImageImpressionsUrl': string;
                'thirdPartyRichMediaImpressionsUrl': string;
                'thirdPartyUrls': ThirdPartyTrackingUrl[];
                'timerCustomEvents': CreativeCustomEvent[];
                'totalFileSize': string;
                'type': string;
                'version': number;
                'videoDescription': string;
                'videoDuration': number;
            }

            export interface CreativeAsset {
                'actionScript3': boolean;
                'active': boolean;
                'alignment': string;
                'artworkType': string;
                'assetIdentifier': CreativeAssetId;
                'backupImageExit': CreativeCustomEvent;
                'bitRate': number;
                'childAssetType': string;
                'collapsedSize': Size;
                'customStartTimeValue': number;
                'detectedFeatures': string[];
                'displayType': string;
                'duration': number;
                'durationType': string;
                'expandedDimension': Size;
                'fileSize': string;
                'flashVersion': number;
                'hideFlashObjects': boolean;
                'hideSelectionBoxes': boolean;
                'horizontallyLocked': boolean;
                'id': string;
                'mimeType': string;
                'offset': OffsetPosition;
                'originalBackup': boolean;
                'position': OffsetPosition;
                'positionLeftUnit': string;
                'positionTopUnit': string;
                'progressiveServingUrl': string;
                'pushdown': boolean;
                'pushdownDuration': number;
                'role': string;
                'size': Size;
                'sslCompliant': boolean;
                'startTimeType': string;
                'streamingServingUrl': string;
                'transparency': boolean;
                'verticallyLocked': boolean;
                'videoDuration': number;
                'windowMode': string;
                'zIndex': number;
                'zipFilename': string;
                'zipFilesize': string;
            }

            export interface CreativeAssetId {
                'name': string;
                'type': string;
            }

            export interface CreativeAssetMetadata {
                'assetIdentifier': CreativeAssetId;
                'clickTags': ClickTag[];
                'detectedFeatures': string[];
                'kind': string;
                'warnedValidationRules': string[];
            }

            export interface CreativeAssignment {
                'active': boolean;
                'applyEventTags': boolean;
                'clickThroughUrl': ClickThroughUrl;
                'companionCreativeOverrides': CompanionClickThroughOverride[];
                'creativeGroupAssignments': CreativeGroupAssignment[];
                'creativeId': string;
                'creativeIdDimensionValue': DimensionValue;
                'endTime': string;
                'richMediaExitOverrides': RichMediaExitOverride[];
                'sequence': number;
                'sslCompliant': boolean;
                'startTime': string;
                'weight': number;
            }

            export interface CreativeCustomEvent {
                'active': boolean;
                'advertiserCustomEventName': string;
                'advertiserCustomEventType': string;
                'artworkLabel': string;
                'artworkType': string;
                'exitUrl': string;
                'id': string;
                'popupWindowProperties': PopupWindowProperties;
                'targetType': string;
                'videoReportingId': string;
            }

            export interface CreativeField {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'id': string;
                'kind': string;
                'name': string;
                'subaccountId': string;
            }

            export interface CreativeFieldAssignment {
                'creativeFieldId': string;
                'creativeFieldValueId': string;
            }

            export interface CreativeFieldValue {
                'id': string;
                'kind': string;
                'value': string;
            }

            export interface CreativeFieldValuesListResponse {
                'creativeFieldValues': CreativeFieldValue[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CreativeFieldsListResponse {
                'creativeFields': CreativeField[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CreativeGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'groupNumber': number;
                'id': string;
                'kind': string;
                'name': string;
                'subaccountId': string;
            }

            export interface CreativeGroupAssignment {
                'creativeGroupId': string;
                'creativeGroupNumber': string;
            }

            export interface CreativeGroupsListResponse {
                'creativeGroups': CreativeGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CreativeOptimizationConfiguration {
                'id': string;
                'name': string;
                'optimizationActivitys': OptimizationActivity[];
                'optimizationModel': string;
            }

            export interface CreativeRotation {
                'creativeAssignments': CreativeAssignment[];
                'creativeOptimizationConfigurationId': string;
                'type': string;
                'weightCalculationStrategy': string;
            }

            export interface CreativeSettings {
                'iFrameFooter': string;
                'iFrameHeader': string;
            }

            export interface CreativesListResponse {
                'creatives': Creative[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface CrossDimensionReachReportCompatibleFields {
                'breakdown': Dimension[];
                'dimensionFilters': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'overlapMetrics': Metric[];
            }

            export interface CustomRichMediaEvents {
                'filteredEventIds': DimensionValue[];
                'kind': string;
            }

            export interface DateRange {
                'endDate': string;
                'kind': string;
                'relativeDateRange': string;
                'startDate': string;
            }

            export interface DayPartTargeting {
                'daysOfWeek': string[];
                'hoursOfDay': number[];
                'userLocalTime': boolean;
            }

            export interface DefaultClickThroughEventTagProperties {
                'defaultClickThroughEventTagId': string;
                'overrideInheritedEventTag': boolean;
            }

            export interface DeliverySchedule {
                'frequencyCap': FrequencyCap;
                'hardCutoff': boolean;
                'impressionRatio': string;
                'priority': string;
            }

            export interface DfpSettings {
                'dfp_network_code': string;
                'dfp_network_name': string;
                'programmaticPlacementAccepted': boolean;
                'pubPaidPlacementAccepted': boolean;
                'publisherPortalOnly': boolean;
            }

            export interface Dimension {
                'kind': string;
                'name': string;
            }

            export interface DimensionFilter {
                'dimensionName': string;
                'kind': string;
                'value': string;
            }

            export interface DimensionValue {
                'dimensionName': string;
                'etag': string;
                'id': string;
                'kind': string;
                'matchType': string;
                'value': string;
            }

            export interface DimensionValueList {
                'etag': string;
                'items': DimensionValue[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface DimensionValueRequest {
                'dimensionName': string;
                'endDate': string;
                'filters': DimensionFilter[];
                'kind': string;
                'startDate': string;
            }

            export interface DirectorySite {
                'active': boolean;
                'contactAssignments': DirectorySiteContactAssignment[];
                'countryId': string;
                'currencyId': string;
                'description': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'inpageTagFormats': string[];
                'interstitialTagFormats': string[];
                'kind': string;
                'name': string;
                'parentId': string;
                'settings': DirectorySiteSettings;
                'url': string;
            }

            export interface DirectorySiteContact {
                'email': string;
                'firstName': string;
                'id': string;
                'kind': string;
                'lastName': string;
                'role': string;
                'type': string;
            }

            export interface DirectorySiteContactAssignment {
                'contactId': string;
                'visibility': string;
            }

            export interface DirectorySiteContactsListResponse {
                'directorySiteContacts': DirectorySiteContact[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface DirectorySiteSettings {
                'activeViewOptOut': boolean;
                'dfp_settings': DfpSettings;
                'instream_video_placement_accepted': boolean;
                'interstitialPlacementAccepted': boolean;
                'nielsenOcrOptOut': boolean;
                'verificationTagOptOut': boolean;
                'videoActiveViewOptOut': boolean;
            }

            export interface DirectorySitesListResponse {
                'directorySites': DirectorySite[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface EventTag {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'enabledByDefault': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'siteFilterType': string;
                'siteIds': string[];
                'sslCompliant': boolean;
                'status': string;
                'subaccountId': string;
                'type': string;
                'url': string;
                'urlEscapeLevels': number;
            }

            export interface EventTagOverride {
                'enabled': boolean;
                'id': string;
            }

            export interface EventTagsListResponse {
                'eventTags': EventTag[];
                'kind': string;
            }

            export interface File {
                'dateRange': DateRange;
                'etag': string;
                'fileName': string;
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'reportId': string;
                'status': string;
                'urls': {
                    'apiUrl': string;
                    'browserUrl': string;
                };
            }

            export interface FileList {
                'etag': string;
                'items': File[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface FloodlightActivitiesGenerateTagResponse {
                'floodlightActivityTag': string;
                'kind': string;
            }

            export interface FloodlightActivitiesListResponse {
                'floodlightActivities': FloodlightActivity[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface FloodlightActivity {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'cacheBustingType': string;
                'countingMethod': string;
                'defaultTags': FloodlightActivityDynamicTag[];
                'expectedUrl': string;
                'floodlightActivityGroupId': string;
                'floodlightActivityGroupName': string;
                'floodlightActivityGroupTagString': string;
                'floodlightActivityGroupType': string;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'hidden': boolean;
                'id': string;
                'idDimensionValue': DimensionValue;
                'imageTagEnabled': boolean;
                'kind': string;
                'name': string;
                'notes': string;
                'publisherTags': FloodlightActivityPublisherDynamicTag[];
                'secure': boolean;
                'sslCompliant': boolean;
                'sslRequired': boolean;
                'subaccountId': string;
                'tagFormat': string;
                'tagString': string;
                'userDefinedVariableTypes': string[];
            }

            export interface FloodlightActivityDynamicTag {
                'id': string;
                'name': string;
                'tag': string;
            }

            export interface FloodlightActivityGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'floodlightConfigurationId': string;
                'floodlightConfigurationIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'name': string;
                'subaccountId': string;
                'tagString': string;
                'type': string;
            }

            export interface FloodlightActivityGroupsListResponse {
                'floodlightActivityGroups': FloodlightActivityGroup[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface FloodlightActivityPublisherDynamicTag {
                'clickThrough': boolean;
                'directorySiteId': string;
                'dynamicTag': FloodlightActivityDynamicTag;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'viewThrough': boolean;
            }

            export interface FloodlightConfiguration {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'analyticsDataSharingEnabled': boolean;
                'exposureToConversionEnabled': boolean;
                'firstDayOfWeek': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lookbackConfiguration': LookbackConfiguration;
                'naturalSearchConversionAttributionOption': string;
                'omnitureSettings': OmnitureSettings;
                'sslRequired': boolean;
                'standardVariableTypes': string[];
                'subaccountId': string;
                'tagSettings': TagSettings;
                'userDefinedVariableConfigurations': UserDefinedVariableConfiguration[];
            }

            export interface FloodlightConfigurationsListResponse {
                'floodlightConfigurations': FloodlightConfiguration[];
                'kind': string;
            }

            export interface FloodlightReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
            }

            export interface FrequencyCap {
                'duration': string;
                'impressions': string;
            }

            export interface FsCommand {
                'left': number;
                'positionOption': string;
                'top': number;
                'windowHeight': number;
                'windowWidth': number;
            }

            export interface GeoTargeting {
                'cities': City[];
                'countries': Country[];
                'excludeCountries': boolean;
                'metros': Metro[];
                'postalCodes': PostalCode[];
                'regions': Region[];
            }

            export interface KeyValueTargetingExpression {
                'expression': string;
            }

            export interface LandingPage {
                'default': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'url': string;
            }

            export interface LandingPagesListResponse {
                'kind': string;
                'landingPages': LandingPage[];
            }

            export interface LastModifiedInfo {
                'time': string;
            }

            export interface ListTargetingExpression {
                'expression': string;
            }

            export interface LookbackConfiguration {
                'clickDuration': number;
                'postImpressionActivitiesDuration': number;
            }

            export interface Metric {
                'kind': string;
                'name': string;
            }

            export interface Metro {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'dmaId': string;
                'kind': string;
                'metroCode': string;
                'name': string;
            }

            export interface MetrosListResponse {
                'kind': string;
                'metros': Metro[];
            }

            export interface MobileCarrier {
                'countryCode': string;
                'countryDartId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface MobileCarriersListResponse {
                'kind': string;
                'mobileCarriers': MobileCarrier[];
            }

            export interface ObjectFilter {
                'kind': string;
                'objectIds': string[];
                'status': string;
            }

            export interface OffsetPosition {
                'left': number;
                'top': number;
            }

            export interface OmnitureSettings {
                'omnitureCostDataEnabled': boolean;
                'omnitureIntegrationEnabled': boolean;
            }

            export interface OperatingSystem {
                'dartId': string;
                'desktop': boolean;
                'kind': string;
                'mobile': boolean;
                'name': string;
            }

            export interface OperatingSystemVersion {
                'id': string;
                'kind': string;
                'majorVersion': string;
                'minorVersion': string;
                'name': string;
                'operatingSystem': OperatingSystem;
            }

            export interface OperatingSystemVersionsListResponse {
                'kind': string;
                'operatingSystemVersions': OperatingSystemVersion[];
            }

            export interface OperatingSystemsListResponse {
                'kind': string;
                'operatingSystems': OperatingSystem[];
            }

            export interface OptimizationActivity {
                'floodlightActivityId': string;
                'floodlightActivityIdDimensionValue': DimensionValue;
                'weight': number;
            }

            export interface PathToConversionReportCompatibleFields {
                'conversionDimensions': Dimension[];
                'customFloodlightVariables': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'perInteractionDimensions': Dimension[];
            }

            export interface Placement {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'comment': string;
                'compatibility': string;
                'contentCategoryId': string;
                'createInfo': LastModifiedInfo;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyName': string;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'lookbackConfiguration': LookbackConfiguration;
                'name': string;
                'paymentApproved': boolean;
                'paymentSource': string;
                'placementGroupId': string;
                'placementGroupIdDimensionValue': DimensionValue;
                'placementStrategyId': string;
                'pricingSchedule': PricingSchedule;
                'primary': boolean;
                'publisherUpdateInfo': LastModifiedInfo;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'size': Size;
                'sslRequired': boolean;
                'status': string;
                'subaccountId': string;
                'tagFormats': string[];
                'tagSetting': TagSetting;
            }

            export interface PlacementAssignment {
                'active': boolean;
                'placementId': string;
                'placementIdDimensionValue': DimensionValue;
                'sslRequired': boolean;
            }

            export interface PlacementGroup {
                'accountId': string;
                'advertiserId': string;
                'advertiserIdDimensionValue': DimensionValue;
                'archived': boolean;
                'campaignId': string;
                'campaignIdDimensionValue': DimensionValue;
                'childPlacementIds': string[];
                'comment': string;
                'contentCategoryId': string;
                'createInfo': LastModifiedInfo;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'externalId': string;
                'id': string;
                'idDimensionValue': DimensionValue;
                'kind': string;
                'lastModifiedInfo': LastModifiedInfo;
                'name': string;
                'placementGroupType': string;
                'placementStrategyId': string;
                'pricingSchedule': PricingSchedule;
                'primaryPlacementId': string;
                'primaryPlacementIdDimensionValue': DimensionValue;
                'programmaticSetting': ProgrammaticSetting;
                'siteId': string;
                'siteIdDimensionValue': DimensionValue;
                'subaccountId': string;
            }

            export interface PlacementGroupsListResponse {
                'kind': string;
                'nextPageToken': string;
                'placementGroups': PlacementGroup[];
            }

            export interface PlacementStrategiesListResponse {
                'kind': string;
                'nextPageToken': string;
                'placementStrategies': PlacementStrategy[];
            }

            export interface PlacementStrategy {
                'accountId': string;
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface PlacementTag {
                'placementId': string;
                'tagDatas': TagData[];
            }

            export interface PlacementsGenerateTagsResponse {
                'kind': string;
                'placementTags': PlacementTag[];
            }

            export interface PlacementsListResponse {
                'kind': string;
                'nextPageToken': string;
                'placements': Placement[];
            }

            export interface PlatformType {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface PlatformTypesListResponse {
                'kind': string;
                'platformTypes': PlatformType[];
            }

            export interface PopupWindowProperties {
                'dimension': Size;
                'offset': OffsetPosition;
                'positionType': string;
                'showAddressBar': boolean;
                'showMenuBar': boolean;
                'showScrollBar': boolean;
                'showStatusBar': boolean;
                'showToolBar': boolean;
                'title': string;
            }

            export interface PostalCode {
                'countryCode': string;
                'countryDartId': string;
                'id': string;
                'kind': string;
            }

            export interface PostalCodesListResponse {
                'kind': string;
                'postalCodes': PostalCode[];
            }

            export interface PricingSchedule {
                'capCostOption': string;
                'disregardOverdelivery': boolean;
                'endDate': string;
                'flighted': boolean;
                'floodlightActivityId': string;
                'pricingPeriods': PricingSchedulePricingPeriod[];
                'pricingType': string;
                'startDate': string;
                'testingStartDate': string;
            }

            export interface PricingSchedulePricingPeriod {
                'endDate': string;
                'pricingComment': string;
                'rateOrCostNanos': string;
                'startDate': string;
                'units': string;
            }

            export interface ProgrammaticSetting {
                'adxDealIds': string[];
                'insertionOrderId': string;
                'insertionOrderIdStatus': boolean;
                'mediaCostNanos': string;
                'programmatic': boolean;
                'traffickerEmails': string[];
            }

            export interface ReachReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'pivotedActivityMetrics': Metric[];
                'reachByFrequencyMetrics': Metric[];
            }

            export interface Recipient {
                'deliveryType': string;
                'email': string;
                'kind': string;
            }

            export interface Region {
                'countryCode': string;
                'countryDartId': string;
                'dartId': string;
                'kind': string;
                'name': string;
                'regionCode': string;
            }

            export interface RegionsListResponse {
                'kind': string;
                'regions': Region[];
            }

            export interface Report {
                'accountId': string;
                'criteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'metricNames': string[];
                };
                'crossDimensionReachCriteria': {
                    'breakdown': SortedDimension[];
                    'dateRange': DateRange;
                    'dimension': string;
                    'dimensionFilters': DimensionValue[];
                    'metricNames': string[];
                    'overlapMetricNames': string[];
                    'pivoted': boolean;
                };
                'delivery': {
                    'emailOwner': boolean;
                    'emailOwnerDeliveryType': string;
                    'message': string;
                    'recipients': Recipient[];
                };
                'etag': string;
                'fileName': string;
                'floodlightCriteria': {
                    'customRichMediaEvents': DimensionValue[];
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'reportProperties': {
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                    };
                };
                'format': string;
                'id': string;
                'kind': string;
                'lastModifiedTime': string;
                'name': string;
                'ownerProfileId': string;
                'pathToConversionCriteria': {
                    'activityFilters': DimensionValue[];
                    'conversionDimensions': SortedDimension[];
                    'customFloodlightVariables': SortedDimension[];
                    'customRichMediaEvents': DimensionValue[];
                    'dateRange': DateRange;
                    'floodlightConfigId': DimensionValue;
                    'metricNames': string[];
                    'perInteractionDimensions': SortedDimension[];
                    'reportProperties': {
                        'clicksLookbackWindow': number;
                        'impressionsLookbackWindow': number;
                        'includeAttributedIPConversions': boolean;
                        'includeUnattributedCookieConversions': boolean;
                        'includeUnattributedIPConversions': boolean;
                        'maximumClickInteractions': number;
                        'maximumImpressionInteractions': number;
                        'maximumInteractionGap': number;
                        'pivotOnInteractionPath': boolean;
                    };
                };
                'reachCriteria': {
                    'activities': Activities;
                    'customRichMediaEvents': CustomRichMediaEvents;
                    'dateRange': DateRange;
                    'dimensionFilters': DimensionValue[];
                    'dimensions': SortedDimension[];
                    'enableAllDimensionCombinations': boolean;
                    'metricNames': string[];
                    'reachByFrequencyMetricNames': string[];
                };
                'schedule': {
                    'active': boolean;
                    'every': number;
                    'expirationDate': string;
                    'repeats': string;
                    'repeatsOnWeekDays': string[];
                    'runsOnDayOfMonth': string;
                    'startDate': string;
                };
                'subAccountId': string;
                'type': string;
            }

            export interface ReportCompatibleFields {
                'dimensionFilters': Dimension[];
                'dimensions': Dimension[];
                'kind': string;
                'metrics': Metric[];
                'pivotedActivityMetrics': Metric[];
            }

            export interface ReportList {
                'etag': string;
                'items': Report[];
                'kind': string;
                'nextPageToken': string;
            }

            export interface ReportsConfiguration {
                'exposureToConversionEnabled': boolean;
                'lookbackConfiguration': LookbackConfiguration;
                'reportGenerationTimeZoneId': string;
            }

            export interface RichMediaExitOverride {
                'customExitUrl': string;
                'exitId': string;
                'useCustomExitUrl': boolean;
            }

            export interface Site {
                'accountId': string;
                'approved': boolean;
                'directorySiteId': string;
                'directorySiteIdDimensionValue': DimensionValue;
                'id': string;
                'idDimensionValue': DimensionValue;
                'keyName': string;
                'kind': string;
                'name': string;
                'siteContacts': SiteContact[];
                'siteSettings': SiteSettings;
                'subaccountId': string;
            }

            export interface SiteContact {
                'contactType': string;
                'email': string;
                'firstName': string;
                'id': string;
                'lastName': string;
            }

            export interface SiteSettings {
                'activeViewOptOut': boolean;
                'creativeSettings': CreativeSettings;
                'disableBrandSafeAds': boolean;
                'disableNewCookie': boolean;
                'lookbackConfiguration': LookbackConfiguration;
                'tagSetting': TagSetting;
            }

            export interface SitesListResponse {
                'kind': string;
                'nextPageToken': string;
                'sites': Site[];
            }

            export interface Size {
                'height': number;
                'iab': boolean;
                'id': string;
                'kind': string;
                'width': number;
            }

            export interface SizesListResponse {
                'kind': string;
                'sizes': Size[];
            }

            export interface SortedDimension {
                'kind': string;
                'name': string;
                'sortOrder': string;
            }

            export interface Subaccount {
                'accountId': string;
                'availablePermissionIds': string[];
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface SubaccountsListResponse {
                'kind': string;
                'nextPageToken': string;
                'subaccounts': Subaccount[];
            }

            export interface TagData {
                'adId': string;
                'clickTag': string;
                'creativeId': string;
                'format': string;
                'impressionTag': string;
            }

            export interface TagSetting {
                'additionalKeyValues': string;
                'includeClickThroughUrls': boolean;
                'includeClickTracking': boolean;
                'keywordOption': string;
            }

            export interface TagSettings {
                'dynamicTagEnabled': boolean;
                'imageTagEnabled': boolean;
            }

            export interface TargetWindow {
                'customHtml': string;
                'targetWindowOption': string;
            }

            export interface TechnologyTargeting {
                'browsers': Browser[];
                'connectionTypes': ConnectionType[];
                'mobileCarriers': MobileCarrier[];
                'operatingSystemVersions': OperatingSystemVersion[];
                'operatingSystems': OperatingSystem[];
                'platformTypes': PlatformType[];
            }

            export interface ThirdPartyTrackingUrl {
                'thirdPartyUrlType': string;
                'url': string;
            }

            export interface UserDefinedVariableConfiguration {
                'dataType': string;
                'reportName': string;
                'variableType': string;
            }

            export interface UserProfile {
                'accountId': string;
                'accountName': string;
                'etag': string;
                'kind': string;
                'profileId': string;
                'subAccountId': string;
                'subAccountName': string;
                'userName': string;
            }

            export interface UserProfileList {
                'etag': string;
                'items': UserProfile[];
                'kind': string;
            }

            export interface UserRole {
                'accountId': string;
                'defaultUserRole': boolean;
                'id': string;
                'kind': string;
                'name': string;
                'parentUserRoleId': string;
                'permissions': UserRolePermission[];
                'subaccountId': string;
            }

            export interface UserRolePermission {
                'availability': string;
                'id': string;
                'kind': string;
                'name': string;
                'permissionGroupId': string;
            }

            export interface UserRolePermissionGroup {
                'id': string;
                'kind': string;
                'name': string;
            }

            export interface UserRolePermissionGroupsListResponse {
                'kind': string;
                'userRolePermissionGroups': UserRolePermissionGroup[];
            }

            export interface UserRolePermissionsListResponse {
                'kind': string;
                'userRolePermissions': UserRolePermission[];
            }

            export interface UserRolesListResponse {
                'kind': string;
                'nextPageToken': string;
                'userRoles': UserRole[];
            }

        }
    }
}