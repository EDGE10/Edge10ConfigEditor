/// <reference path="Models.Enums.ts" />

declare module Api.Models {
	interface IActivity {
		activityDefinition: IActivityDefinition;
		duration: string;
		comments: string;
		userIds: string[];
		subjectIds: string[];
		actualDuration: string;
		rpe: number;
		load: number;
	}

	interface IActivityDefinition {
		id: string;
		name: string;
		code: string;
		defaultDuration: string;
		categoryIds: string[];
		equipment: string;
		objectives: string;
	}

	interface IDistributionList {
		id: string;
		name: string;
		subjects: ISubject[];
		users: IUser[];
	}

	interface ISubject extends IContact {
		contactType: Models.Enums.ContactType;
		dateOfBirth: Date;
		title: string;
		gender: string;
		profession: string;
		groupIds: string[];
		address: string;
		city: string;
		region: string;
		postcode: string;
		country: string;
	}

	interface IContact {
		id: string;
		contactType: Models.Enums.ContactType;
		firstName: string;
		lastName: string;
		emailAddress: string;
		mobileNumber: string;
		username: string;
	}

	interface IUser extends IContact {
		contactType: Models.Enums.ContactType;
		accessLevel: Models.Enums.AccessLevel;
	}

	interface IActivityDefinitionResults {
		categories: ICategoryMetadata[];
		activityDefinitions: IActivityDefinition[];
		matchedActivityDefinitions: number;
	}

	interface ICategoryMetadata {
		category: ICategory;
		activityCount: number;
	}

	interface ICategory {
		id: string;
		name: string;
	}

	interface IAssessment {
		id: string;
		contactId: string;
		contactType: Models.Enums.ContactType;
		creatorId: string;
		gapId: string;
		name: string;
		date: Date;
		instructions: string;
		subjectComments: string;
		coachComments: string;
		attachmentComments: string;
		level: ILookupValue;
		change: Models.Enums.ChangeType;
		status: Models.Enums.TrafficLightStatus;
		users: IUser[];
		attachments: IAttachment[];
		removedData: IRemovedSessionData;
		removedUserIds: string[];
		additionalData: IAttributeValue[];
	}

	interface ILookupValue {
		id: string;
		value: string;
		index: number;
		score: number;
	}

	interface IAttachment {
		id: string;
		description: string;
		uri: string;
		isAvailable: boolean;
		type: Models.Enums.AttachmentType;
	}

	interface IRemovedSessionData {
		attributeIds: string[];
		attachmentIds: string[];
		uriAttachments: string[];
	}

	interface IAttributeValue {
		attributeDefinitionId?: string;
		attributeDefinition?: IAttributeDefinition;
		value: any;
		tableRows?: IAttributeValue[][];
		lookupValues?: ILookupValue[];
		isDynamic?: boolean;
	}

	interface IAttributeDefinition {
		id: string;
		name: string;
		description?: string;
		type: Models.Enums.AttributeType;
		maxValue?: number;
		minValue?: number;
		columnWidth?: number;
		lookup?: ILookupDefinition;
		tableColumns?: IAttributeDefinition[];
		exerciseType?: Models.Enums.ExerciseType;
		units?: string;
		minLines?: number;
		isCalculated?: boolean;
		dependantAttributes?: string[];
		script?: string;
		scriptScope?: Models.Enums.CalculatedAttributeScope;
		permissionLevel?: Models.Enums.PermissionLevel;
		defaultValue?: any;
		decimalPlaces?: number;
		displayTemplate?: string;
		snapshotAggregationId?: string;
	}

	interface ILookupDefinition {
		id: string;
		name: string;
		values: ILookupValue[];
	}

	interface IAttributeScoreBands {
		preferLow: boolean;
		scoreBands: IScoreBand[];
	}

	interface IScoreBand {
		min: number;
		score: number;
		isMinimumStandard: boolean;
	}

	interface IFilterParameters {
		entityId: string;
		entityType: Models.Enums.QueryEntityType;
		dateRangeType: Models.Enums.QueryDateRangeType;
		date: Date;
		dateOffset: number;
	}

	interface IGap {
		id: string;
		entityId: string;
		name: string;
		category: ICategory;
		status: Models.Enums.GapStatus;
		comments: string;
		openDate: Date;
		closeDate: Date;
		attributeDefinitions: IAttributeDefinition[];
		milestones: IMilestone[];
		activities: IActivityDefinition[];
		latestTrafficLightStatus: Models.Enums.TrafficLightStatus;
		latestChange: Models.Enums.ChangeType;
		lastUpdateDate: Date;
	}

	interface IMilestone {
		date: Date;
		value: IAttributeValue;
	}

	interface ILink {
		type: string;
		target: string;
		entityId: string;
	}

	interface IQueryCell extends IQueryElementBase {
		value: any;
		lookupValues: ILookupValue[];
	}

	interface IQueryElementBase {
		metadata: { [index: string]: any };
	}

	interface IQueryColumn extends IQueryElementBase {
		header: any;
	}

	interface IQueryDefinition {
		id: string;
		name: string;
		type: Models.Enums.QueryType;
		sessionTypes: ITemplate[];
		attributes: IAttributeDefinition[];
		aggregations: IAggregationDefinition[];
	}

	interface ITemplate {
		id: string;
		name: string;
		sessionAttributeDefinitions: IAttributeDefinition[];
		subjectAttributeDefinitions: IAttributeDefinition[];
		description: string;
		permissionLevel: Models.Enums.PermissionLevel;
		supportsActivities: boolean;
		color: string;
		icon: string;
		sessionAttributesMetaData: { [attributeId: string]: ITemplateAttributeMetadata };
		subjectAttributesMetaData: { [attributeId: string]: ITemplateAttributeMetadata };
	}

	interface ITemplateAttributeMetadata {
		isMandatory: boolean;
	}

	interface IAggregationDefinition {
		id: string;
		attributeDefinition: IAttributeDefinition;
		columnName: string;
		template?: ITemplate;
		type: Models.Enums.AggregationType;
		aggregationOffset?: number;
		valueCountName?: string;
		startDate?: Date;
		endDate?: Date;
		dateOffset?: number;
		isDynamicRange?: boolean;
		excludeDefault?: boolean;
		decimalPlaces?: number;
		standardDeviationMultiplier?: number;
	}

	interface IQueryResultsAggregations {
		max: KnockoutComputed<any[]>;
		min: KnockoutComputed<any[]>;
		sum: KnockoutComputed<any[]>;
		average: KnockoutComputed<any[]>;
		standardDeviation: KnockoutComputed<any[]>;
		zScore: KnockoutComputed<any[]>;
	}

	interface IQueryResults extends IQueryElementBase {
		columns: IQueryColumn[];
		rows: IQueryRow[];
		aggregations: IQueryResultsAggregations;
	}

	interface IQueryRow extends IQueryElementBase {
		cells: IQueryCell[];
	}

	interface IReportDefinition {
		id: string;
		name: string;
		filter: IFilterParameters;
		createdBy: string;
		created: Date;
		externalAttachmentId: string;
		viewName: string;
		queries: IReportDefinitionQuery[];
	}

	interface IReportDefinitionQuery {
		queryDefinition: IQueryDefinition;
		worksheetName: string;
		insertCellX: number;
		insertCellY: number;
		filter: IFilterParameters;
		viewName: string;
	}

	interface IScoreTest {
		definition: IScoreTestDefinition;
		level: IScoreTestLevel;
		minimumStandard: number;
		categories: IScoreTestCategory[];
	}

	interface IScoreTestDefinition {
		id: string;
		name: string;
	}

	interface IScoreTestLevel {
		id: string;
		name: string;
		index: number;
	}

	interface IScoreTestCategory {
		id: string;
		name: string;
		aggregations: IScoreTestAggregation[];
		weight: number;
	}

	interface IScoreTestAggregation {
		id: string;
		attributeDefinition: IAttributeDefinition;
		aggregationType: Models.Enums.AggregationType;
		weight: number;
	}

	interface IScoreTestAggregationResult {
		value: any;
		score: number;
		isOfStandard: boolean;
	}

	interface IScoreTestCategoryResult {
		score: number;
		aggregationResults: { [key: string]: IScoreTestAggregationResult };
		anyResultsNotOfStandard: boolean;
	}

	interface IScoreTestEntityResult {
		contact: IContact;
		score: number;
		isOfStandard: boolean;
		categoryResults: IScoreTestCategoryResult[];
		anyResultsNotOfStandard: boolean;
	}

	interface IScoreTestResult {
		scoreTest: IScoreTest;
		entityResults: IScoreTestEntityResult[];
	}

	interface ISessionEventHandlerDefinition {
		id: string;
		name: string;
		handlerName: string;
		handlerParameters: any;
		eventTypes: Models.Enums.SessionEventType[];
		sessionTypeIds: string[];
		hints: string[];
	}

	interface ISessionQueryFilters {
		sessionIds: string[];
		sessionLinks: ILink[];
		contactIds: string[];
	}

	interface ISchedule {
		until: Date;
		days: System.DayOfWeek[];
	}

	interface ISquadSummaryColumn {
		id: string;
		systemAttributeDefinition: IAttributeDefinition;
		aggregationDefinition: IAggregationDefinition;
	}

	interface ISquadSummary {
		id: string;
		name: string;
		squadSummaryColumns: ISquadSummaryColumn[];
	}

	interface IContactSessionData {
		contactId: string;
		contactType: Models.Enums.ContactType;
		data: IAttributeValue[];
		attachments: IAttachment[];
		removedData: IRemovedSessionData;
	}

	interface IGroup {
		id: string;
		name: string;
		description: string;
		singleAssignments: boolean;
		subjects: ISubject[];
		users: IUser[];
		permissionLevel: Models.Enums.PermissionLevel;
	}

	interface IRemovedSessionContent {
		contactIds: string[];
		groupIds: string[];
		data: IRemovedSessionData;
	}

	interface ISignature {
		contact: IContact;
		date: Date;
		signedItems: ISignedItem[];
	}

	interface ISignedItem {
		itemId: string;
		type: Models.Enums.SignedItemType;
		contactId?: string;
	}

	interface ISessionData extends ISessionDataBase {
		sessionDetails: ISessionDetails;
	}

	interface ISessionDataBase {
		data: IAttributeValue[];
		attachments: IAttachment[];
		contacts: IContactSessionData[];
		groupIds: string[];
		removedContent: IRemovedSessionContent;
		activities: IActivity[];
		links: ILink[];
		signatures: ISignature[];
	}

	interface ISessionDetails {
		id: string;
		name: string;
		start: Date;
		end: Date;
		isAllDay: boolean;
		reminderProvided: boolean;
		reminder: Date;
		dueProvided: boolean;
		due: Date;
		lastUpdatedById: string;
		lastUpdated: Date;
		creatorId: string;
		sessionTypeId: string;
	}

	interface INewSessionData extends ISessionDataBase {
		sessionDetails: INewSessionDetails;
	}

	interface INewSessionDetails extends ISessionDetails {
		name: string;
		start: Date;
		end: Date;
		sessionTypeId: string;
	}

	interface ISessionSummary {
		sessionDetails: ISessionDetails;
		templateId: string;
		templateName: string;
		templateColor: string;
		templateIcon: string;
		permissionLevel: Models.Enums.PermissionLevel;
		isSigned: boolean;
	}

	interface IDashboard {
		dashboardName: string;
		storageItemId: string;
		deleted: boolean;
		sharedNowViewingEntityFilter: Models.Enums.QueryEntityType;
		name: string;
		viewParameters: IFilterParameters,
		category: ICategory;
		owner: string;
		createdBy: IContact;
	}
}

declare module Api.Models.Jobs {
	interface IJob {
		id: string;
		state: Jobs.JobState;
		data: any;
		parameters: any;
		createdDate: Date;
		currentStage: string;
		createdSessionIds: string[];
		error: any;
		jobDefinitionName: string;
	}

	interface IJobGeneric<TData, TParameters> extends IJob {
		data: TData;
		parameters: TParameters;
	}

	interface IScheduleDetails {
		startAt: Date;
		repeatType: Api.Models.Jobs.ScheduleRepeatType;
		repeatInterval: number;
	}

	interface IScheduleDefinition {
		id :string;
		status: number;
		scheduleDetails?: IScheduleDetails;
	}
}

declare module Api.Models.Permissions {
	interface IDistributionListPermission {
		distributionList: IDistributionList;
		permissionLevel: Models.Enums.PermissionLevel;
	}

	interface IRecordPermissionSettingDetail {
		permissionType: Models.Enums.RecordPermissionType;
		distributionListPermissions: Array<IDistributionListPermission>;
	}
}

declare module Api.Models.Comments {
	interface ICommentPermissions {
		visibility: Comments.CommentVisibility;
		distributionLists: string[];
	}

	interface ICommentActivity {
		date: Date;
		description: string;
		thread: ICommentThread;
		authors: IContact[];
	}

	interface ICommentThread {
		id: string;
		title: string;
		link: string;
		target: string;
		targetContact: IContact;
		participants: IContact[];
		comments: IComment[];
	}

	interface IComment extends ICommentPermissions {
		id: string;
		author: IContact;
		body: string;
		date: Date;
		isUnread: boolean;
		mentions: IContact[];
		trafficLight: Models.Enums.TrafficLightStatus;
		deletedBy: IContact;
		sendEmail: boolean;
		sendSms: boolean;
	}
}

declare module Api.Models.Comparison {
  interface IPropertyDifference {
    propertyName: string;
    oldValue: any;
    newValue: any;
  }

  interface ICollectionDifference<TChild, TChildDifference> {
    added: TChild[];
    removed: TChild[];
    changed: TChildDifference[];
  }

  interface IAttributeValueDifference {
    oldValue: IAttributeValue;
    newValue: IAttributeValue;
  }

	interface IDataItemsDifference extends ICollectionDifference<IAttributeValue, IAttributeValueDifference> {
	} 

  interface IContactDifference {
    contactId: string;
    contactType: Api.Models.Enums.ContactType;
    values: IDataItemsDifference;
  }

  interface IContactsDifference extends ICollectionDifference<IContactSessionData, IContactDifference> {
    addedContactDetails: IContact[];
  }

  interface ISessionDifference {
    properties: IPropertyDifference[];
    sessionValues: IDataItemsDifference;
    contacts: IContactsDifference;
    changedBy: IContact;
    changedOn: Date;
  }
}

declare module Api.Models.Events {
	
	interface ISessionEventData {
		sessionId: string;
		sessionTypeId: string;
		tenant: string;
		eventType: Api.Models.Enums.SessionEventType;
		dateTime: Date;
		contactId: string;
		hints: string[];
		updatedContacts: string[];
		updatedDataItems: IDataItemChange[];
	}

	interface IDataItemChange {
		dataItemId: string;
		contactId?: string;
	}
}

declare module Model {
	interface IFilterParameters {
		entityId?: string;
		entityType?: Api.Models.Enums.QueryEntityType;
		dateRangeType?: Api.Models.Enums.QueryDateRangeType;
		date?: Date;
		dateOffset?: number;
	}
}

declare module Web.Models {
	interface IViewElementParameters extends Model.IFilterParameters {
		viewName?: string;
		sessionId?: string;
		sessionFormat?: Models.SessionFormat;
		sessionMode?: Models.SessionMode;
		queryName?: string;
		implicitQueryElementId?: string;
		implicitQueryElementType?: DataMining.Queries.ImplicitQueryElementType;
		implicitChartType?: Charting.SeriesType;
		chartName?: string;
		subEntityId?: string;
		stateId?: string;
	}
}