import { asyncBuilderFactory } from "./operations_builder/async_builder_factory";
import SyncOperationsBuilder from "./operations_builder/sync_operations_builder";
import { SmartAPIKGOperationObject } from "./parser/types";
import { BuilderOptions, FilterCriteria } from "./types";
import { ft } from "./filter";
import path from "path";
import Debug from "debug";
const debug = Debug("smartapi-kg:MetaKG");

export default class MetaKG {
  private _ops: SmartAPIKGOperationObject[];
  private _file_path: string;
  /**
   * constructor to build meta knowledge graph from SmartAPI Specifications
   */
  constructor(path: string = undefined) {
    // store all meta-kg operations
    this._ops = [];
    this.path = path;
  }

  set path(file_path: string) {
    if (typeof file_path === "undefined") {
      try {
        this._file_path = path.resolve(__dirname, "./data/smartapi_specs.json");
      } catch(error) {
        console.warn("Could not resolve file path. (ignore this if using bundle)\n", error);
        this._file_path = '';
      }
    } else {
      this._file_path = file_path;
    }
  }

  get ops(): SmartAPIKGOperationObject[] {
    return this._ops;
  }

  /**
   * Construct API Meta Knowledge Graph based on SmartAPI Specifications.
   * @param {boolean} includeReasoner - specify whether to include reasonerStdAPI into meta-kg
   */
  async constructMetaKG(
    includeReasoner: boolean = false,
    options: BuilderOptions = {}
  ): Promise<SmartAPIKGOperationObject[]> {
    this._ops = await asyncBuilderFactory(options, includeReasoner);
    return this._ops;
  }

  /**
   * Construct API Meta Knowledge Graph based on SmartAPI Specifications.
   * @param {string} tag - the SmartAPI tag to be filtered on
   */
  constructMetaKGSync(
    options: BuilderOptions = {}
  ): SmartAPIKGOperationObject[] {
    const builder = new SyncOperationsBuilder(options, this._file_path);
    this._ops = builder.build();
    return this._ops;
  }

  /**
   * Filter the Meta-KG operations based on specific criteria
   * @param {Object} - filtering criteria, each key represents the field to be quried
   */
  filter(criteria: FilterCriteria): SmartAPIKGOperationObject[] {
    return ft(this.ops, criteria);
  }
}
